# Homeassistant Lovelace Comfoair card

Use https://github.com/wichers/esphome-comfoair to connect your ComfoAir to Homeassistant and then use this lovelace card to visualize your data!

![Image](https://raw.githubusercontent.com/wichers/lovelace-comfoair/master/result.png)

[![Install with HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=wichers&repository=lovelace-comfoair)

# Manual installation

* Clone this repo into your `www` folder inside your configuration. So it will be: `config_folder/www/lovelace-comfoair`.
* Edit your lovelace-ui.yaml or use the flat configuration mode in lovelace and add to the top:
```
resources:
  - type: module
    url: /local/lovelace-comfoair/comfoair-card.js
```
* Add a card with `type: 'custom:comfoair-card'`, your climate entity, and the sensor prefix that matches your ESPHome device name (hyphens become underscores):
```yaml
type: custom:comfoair-card
entity: climate.esphome_comfoair200_comfoair_200   # your climate entity
prefix: esphome_comfoair200                        # ESPHome device name with _ instead of -
```
  The card builds sensor IDs as `sensor.{prefix}_outside_air_temperature`, etc.
  Default `prefix` is `comfoair` (legacy). If entities are missing, the card lists the IDs it expected instead of crashing.
* Restart home assistant (or hard-refresh the browser: Ctrl+F5) after updating the JS
* ???
* Profit!

# HACS installation

If you prefer to manage the card via HACS:

1. Open HACS in Home Assistant and add `https://github.com/wichers/lovelace-comfoair` as a **Custom Repository** in the *Lovelace* category.
2. Find **Comfoair ventilation lovelace component** in the list of custom repositories and install it.
3. Make sure the following resource is added to your configuration:
   ```yaml
   url: /hacsfiles/lovelace-comfoair/comfoair-card.js
   type: module
   ```
4. Use the card with `type: 'custom:comfoair-card'`, your climate entity, and a matching `prefix` as shown above.

## Configuration

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `entity` | yes | — | Climate entity of the ComfoAir unit |
| `prefix` | no | `comfoair` | Prefix used for sensor / binary_sensor entity IDs (ESPHome device name with `_`) |

Optional full entity overrides (if your IDs don't follow `{domain}.{prefix}_{suffix}`):

`outside_air_temperature`, `intake_fan_speed_rpm`, `exhaust_air_temperature`, `exhaust_fan_speed_rpm`, `return_air_temperature`, `return_air_level`, `supply_air_temperature`, `supply_air_level`, `filter_status`, `supply_fan_active`, `bypass_valve_open`, `preheating_state`, `summer_mode`.

Example with overrides:

```yaml
type: custom:comfoair-card
entity: climate.comfoair_200
prefix: esphome_comfoair200
filter_status: sensor.my_custom_filter_sensor
```

