import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";


class ComfoAirCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  render() {
    const temp_units = this.hass.states['sensor.outside_air'].attributes.unit_of_measurement;
    return html`
    <ha-card>
    <div class="container">
      <div class="bg">
          <div class="flex-container">
              <div class="flex-col-out">
                  <div>${Math.round(this.hass.states['sensor.outside_air'].state)}${temp_units}</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon></ha-icon> ${Math.trunc(this.hass.states['sensor.fan_speed_supply'].state)} rpm</div>
                  <div>${Math.round(this.hass.states['sensor.exhaust_air'].state)}${temp_units}</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon> ${Math.trunc(this.hass.states['sensor.fan_speed_exhaust'].state)} rpm</div>
              </div>
              <div class="flex-col-main">
                  <div>${Math.round(this.hass.states[this.config.entity].attributes.temperature)}${temp_units}</div>
                  <div><ha-icon class="spin" icon="mdi:${({'auto': 'fan', 'off': 'fan-off', low: 'fan-speed-1', medium: 'fan-speed-2', high: 'fan-speed-3'}[this.hass.states[this.config.entity].attributes.fan_mode])}"></ha-icon></div> 
              </div>
              <div class="flex-col-in">
                  <div>${Math.round(this.hass.states['sensor.return_air'].state)}${temp_units}</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${Math.trunc(this.hass.states['sensor.return_air_level'].state)}%</div>
                  <div>${Math.round(this.hass.states['sensor.supply_air'].state)}${temp_units}</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${Math.trunc(this.hass.states['sensor.supply_air_level'].state)}%</div>
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

  getFanTmpl(){
    if(this.hass.states['binary_sensor.supply_fan'].state == 'on'){
      return html`<ha-icon icon="mdi:fan"></ha-icon>`;
    }else{
      return html`<ha-icon class="inactive" icon="mdi:fan"></ha-icon>`;
    }
  }

  getAirFilterTmpl(){
    if(this.hass.states['binary_sensor.filter_full'].state != 'on'){
      return html`<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
    }else{
      return html`<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
    }
  }

  getBypassTmpl(){
    if(this.hass.states['binary_sensor.bypass_valve'].state == 'on'){
      return html`<ha-icon icon="mdi:electric-switch"></ha-icon>`;
    }else{
      return html`<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
    }
  }

  getPreHeatTmpl(){
    if(this.hass.states['binary_sensor.preheating'].state == 'on'){
      return html`<ha-icon icon="mdi:radiator"></ha-icon>`;
    }else{
      return html`<ha-icon class="inactive" icon="mdi:radiator"></ha-icon>`;
    }
  }

  getSummerModeTmpl(){
    if(this.hass.states['binary_sensor.summer_mode'].state == 'off'){
      return html`<ha-icon icon="mdi:snowflake"></ha-icon>`;
    }else{
      return html`<ha-icon class="inactive" icon="mdi:weather-sunny"></ha-icon>`;
    }
  }

  setConfig(config) {
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 7;
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
    background-color: yellow;
    font-family: sans-serif;
    font-size: 14px;
    padding: 8px;
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
      color: color: #d80707db;
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
