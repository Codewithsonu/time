## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Sat Feb 25 2023 10:31:30 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.9.0|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>time|
|**Application Title**<br>Time|
|**Namespace**<br>com.sap|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.111.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## time

A Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

2.Covid 19 API https://api.rootnet.in/
3.for installing the new libraries: ui5 add sap.viz --config ui5-local.yaml

to fing the item in the model 

JSON.parse(this.getView().getModel("tiles").getJSON()).find(items=> {if(items.router == oRoute){return items;}})


