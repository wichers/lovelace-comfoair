import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

/**
 * Lovelace card for Zehnder ComfoAir (esphome-comfoair).
 *
 * Config:
 *   type: custom:comfoair-card
 *   entity: climate.your_comfoair          # required climate entity
 *   prefix: esphome_comfoair200            # optional, default "comfoair"
 *                                          # used to build sensor.* / binary_sensor.* IDs
 *
 * Entity IDs used (with default prefix "comfoair"):
 *   sensor.{prefix}_outside_air_temperature
 *   sensor.{prefix}_intake_fan_speed_rpm
 *   sensor.{prefix}_exhaust_air_temperature
 *   sensor.{prefix}_exhaust_fan_speed_rpm
 *   sensor.{prefix}_return_air_temperature
 *   sensor.{prefix}_return_air_level
 *   sensor.{prefix}_supply_air_temperature
 *   sensor.{prefix}_supply_air_level
 *   sensor.{prefix}_filter_status
 *   binary_sensor.{prefix}_supply_fan_active
 *   binary_sensor.{prefix}_bypass_valve_open
 *   binary_sensor.{prefix}_preheating_state
 *   binary_sensor.{prefix}_summer_mode
 *
 * You can override any of those keys in config with a full entity_id, e.g.:
 *   outside_air_temperature: sensor.my_outside_temp
 */
class ComfoAirCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  setConfig(config) {
    if (!config || !config.entity) {
      throw new Error("Please define a climate entity (entity: climate....)");
    }
    this.config = config;
  }

  getCardSize() {
    return 7;
  }

  /** Default entity_id built from domain + prefix + suffix. */
  _entityId(domain, suffix, configKey) {
    if (this.config[configKey]) {
      return this.config[configKey];
    }
    const prefix = this.config.prefix || "comfoair";
    return `${domain}.${prefix}_${suffix}`;
  }

  /** Safe state lookup; returns undefined if hass/entity missing. */
  _state(entityId) {
    if (!this.hass || !entityId) {
      return undefined;
    }
    return this.hass.states[entityId];
  }

  _stateValue(entityId, fallback = "–") {
    const st = this._state(entityId);
    if (!st || st.state === undefined || st.state === null) {
      return fallback;
    }
    return st.state;
  }

  _attr(entityId, attr, fallback = "–") {
    const st = this._state(entityId);
    if (!st || !st.attributes || st.attributes[attr] === undefined) {
      return fallback;
    }
    return st.attributes[attr];
  }

  _truncState(entityId, fallback = "–") {
    const value = this._stateValue(entityId, null);
    if (value === null || value === "unavailable" || value === "unknown") {
      return fallback;
    }
    const n = Number(value);
    return Number.isFinite(n) ? Math.trunc(n) : fallback;
  }

  _requiredEntities() {
    return [
      this.config.entity,
      this._entityId("sensor", "outside_air_temperature", "outside_air_temperature"),
      this._entityId("sensor", "intake_fan_speed_rpm", "intake_fan_speed_rpm"),
      this._entityId("sensor", "exhaust_air_temperature", "exhaust_air_temperature"),
      this._entityId("sensor", "exhaust_fan_speed_rpm", "exhaust_fan_speed_rpm"),
      this._entityId("sensor", "return_air_temperature", "return_air_temperature"),
      this._entityId("sensor", "return_air_level", "return_air_level"),
      this._entityId("sensor", "supply_air_temperature", "supply_air_temperature"),
      this._entityId("sensor", "supply_air_level", "supply_air_level"),
    ];
  }

  _missingEntities() {
    if (!this.hass) {
      return [];
    }
    return this._requiredEntities().filter((id) => !this.hass.states[id]);
  }

  render() {
    if (!this.config) {
      return html``;
    }

    if (!this.hass) {
      return html`<ha-card><div class="not-found">Waiting for Home Assistant…</div></ha-card>`;
    }

    const missing = this._missingEntities();
    if (missing.length) {
      const prefix = this.config.prefix || "comfoair";
      return html`
        <ha-card>
          <div class="not-found">
            <strong>ComfoAir card: missing entities</strong>
            <p>
              Expected sensors with prefix <code>${prefix}</code>.
              Set <code>prefix:</code> in the card config to match your ESPHome
              device name (underscores, no domain), or override individual entity IDs.
            </p>
            <ul>
              ${missing.map((id) => html`<li><code>${id}</code></li>`)}
            </ul>
            <p>Climate entity: <code>${this.config.entity}</code></p>
          </div>
        </ha-card>
      `;
    }

    const climate = this.config.entity;
    const outsideTemp = this._entityId("sensor", "outside_air_temperature", "outside_air_temperature");
    const intakeRpm = this._entityId("sensor", "intake_fan_speed_rpm", "intake_fan_speed_rpm");
    const exhaustTemp = this._entityId("sensor", "exhaust_air_temperature", "exhaust_air_temperature");
    const exhaustRpm = this._entityId("sensor", "exhaust_fan_speed_rpm", "exhaust_fan_speed_rpm");
    const returnTemp = this._entityId("sensor", "return_air_temperature", "return_air_temperature");
    const returnLevel = this._entityId("sensor", "return_air_level", "return_air_level");
    const supplyTemp = this._entityId("sensor", "supply_air_temperature", "supply_air_temperature");
    const supplyLevel = this._entityId("sensor", "supply_air_level", "supply_air_level");

    const fanMode = this._attr(climate, "fan_mode", "off");
    const fanIcon = {
      auto: "fan",
      off: "fan-off",
      low: "fan-speed-1",
      medium: "fan-speed-2",
      high: "fan-speed-3"
    }[fanMode] || "fan";

    return html`
    <ha-card>
    <div class="container">
      <div class="bg">
          <div class="flex-container">
              <div class="flex-col-out">
                  <div>${this._stateValue(outsideTemp)}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon> ${this._truncState(intakeRpm)} rpm</div>
                  <div>${this._stateValue(exhaustTemp)}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon> ${this._truncState(exhaustRpm)} rpm</div>
              </div>
              <div class="flex-col-main">
                  <div>${this._attr(climate, "temperature")}°C</div>
                  <div><ha-icon class="spin" icon="mdi:${fanIcon}"></ha-icon></div>
              </div>
              <div class="flex-col-in">
                  <div>${this._stateValue(returnTemp)}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${this._truncState(returnLevel)}%</div>
                  <div>${this._stateValue(supplyTemp)}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${this._truncState(supplyLevel)}%</div>
              </div>
          </div>
      </div>
      </div>
      <div class="info-row">
      ${this.getFanTmpl()}
      ${this.getAirFilterTmpl()}
      ${this.getBypassTmpl()}
      ${this.getPreHeatTmpl()}
      ${this.getSummerModeTmpl()}
      </div>
    </ha-card>
    `;
  }

  getFanTmpl() {
    const id = this._entityId("binary_sensor", "supply_fan_active", "supply_fan_active");
    if (this._stateValue(id) == "on") {
      return html`<ha-icon icon="mdi:fan"></ha-icon>`;
    }
    return html`<ha-icon class="inactive" icon="mdi:fan"></ha-icon>`;
  }

  getAirFilterTmpl() {
    const id = this._entityId("sensor", "filter_status", "filter_status");
    if (this._stateValue(id) == "Full") {
      return html`<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
    }
    return html`<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
  }

  getBypassTmpl() {
    const id = this._entityId("binary_sensor", "bypass_valve_open", "bypass_valve_open");
    if (this._stateValue(id) == "on") {
      return html`<ha-icon icon="mdi:electric-switch"></ha-icon>`;
    }
    return html`<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
  }

  getPreHeatTmpl() {
    const id = this._entityId("binary_sensor", "preheating_state", "preheating_state");
    if (this._stateValue(id) == "on") {
      return html`<ha-icon icon="mdi:radiator"></ha-icon>`;
    }
    return html`<ha-icon class="inactive" icon="mdi:radiator"></ha-icon>`;
  }

  getSummerModeTmpl() {
    const id = this._entityId("binary_sensor", "summer_mode", "summer_mode");
    if (this._stateValue(id) == "off") {
      return html`<ha-icon icon="mdi:snowflake"></ha-icon>`;
    }
    return html`<ha-icon class="inactive" icon="mdi:weather-sunny"></ha-icon>`;
  }

  static get styles() {
    return css`
    .container {
      padding: 10px;
    }
    .bg {
      background-image: url(/local/lovelace-comfoair/comfoair_heat.png);
      height: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position-y: center
    }
    .not-found {
      background-color: var(--warning-color, #fff3cd);
      color: var(--primary-text-color, #333);
      font-family: var(--paper-font-body1_-_font-family, sans-serif);
      font-size: 14px;
      padding: 12px 16px;
      line-height: 1.4;
    }
    .not-found ul {
      margin: 8px 0;
      padding-left: 1.2em;
      max-height: 160px;
      overflow: auto;
    }
    .not-found code {
      font-size: 12px;
    }
    .flex-container {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .flex-col-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 0px;
      font-size: x-large;
      text-align: center;
      font-weight:bold;
    }
    .flex-col-out {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .flex-col-in {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .fan-state {
      padding-top: 15px;
    }
    .spin {
      animation-name: spin;
      animation-duration: 2000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .info-row {
      background: rgba(0,0,0,0.2);
      margin-top: 10px;
      padding: 5px;
      border-top: rgba(0,0,0,0.4);
      -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
      -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
      box-shadow: 0px -2.5px 3px rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: space-around;
    }

    .inactive {
      opacity: 0.7;
    }

    .warning {
      color: #d80707db;
    }

  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
    }
    `;
  }
}
customElements.define("comfoair-card", ComfoAirCard);
