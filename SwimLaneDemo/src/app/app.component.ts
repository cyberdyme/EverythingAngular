import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonObject = JSON.parse(`{
  "typeDictionary": [
    {
      "name": "text",
      "category": "String"
    },
    {
      "name": "long",
      "category": "Long"
    },
    {
      "name": "decimal",
      "category": "Decimal"
    }
  ],
  "metas": [
    {
      "metaRuleBaseType": "client",
      "baseKey": [
        {
          "name": "country",
          "title": "Country",
          "typeName": "text",
          "optionality": "Mandatory"
        },
        {
          "name": "city",
          "title": "City",
          "typeName": "text",
          "optionality": "Mandatory"
        }
      ],
      "profileTypes": [
        {
          "name": "nandos",
          "title": "Nandos",
          "condition": [
            {
              "name": "weekDay",
              "title": "Day of Week",
              "typeName": "text",
              "optionality": "Optional"
            },
            {
              "name": "timeOfDay",
              "title": "Time of Day",
              "typeName": "text",
              "optionality": "Optional"
            }
          ],
          "values": [
            {
              "name": "chickenWings",
              "title": "Chicken Wings",
              "typeName": "long",
              "optionality": "Mandatory"
            },
            {
              "name": "drumsticks",
              "title": "Drumsticks",
              "typeName": "long",
              "optionality": "Mandatory"
            },
            {
              "name": "chips",
              "title": "Chips",
              "typeName": "long",
              "optionality": "Mandatory"
            }
          ],
          "validations": []
        },
        {
          "name": "tesco",
          "title": "Tesco",
          "condition": [
            {
              "name": "weekDay",
              "title": "Day of Week",
              "typeName": "text",
              "optionality": "Optional"
            },
            {
              "name": "hungerLevel",
              "title": "Hungry?",
              "typeName": "text",
              "optionality": "Optional"
            }
          ],
          "values": [
            {
              "name": "chocolateBiscuits",
              "title": "Chocolate Biscuits",
              "typeName": "long",
              "optionality": "Mandatory"
            },
            {
              "name": "toiletRoll",
              "title": "Toilet Rolls",
              "typeName": "long",
              "optionality": "Mandatory"
            },
            {
              "name": "pintsOfMilk",
              "title": "Pints Milk",
              "typeName": "long",
              "optionality": "Mandatory"
            },
            {
              "name": "loafsOfBread",
              "title": "Loafs",
              "typeName": "long",
              "optionality": "Mandatory"
            }
          ],
          "validations": []
        },
        {
          "name": "taylorSt",
          "title": "Taylor St Baristas",
          "condition": [
            {
              "name": "weekDay",
              "title": "Day of Week",
              "typeName": "text",
              "optionality": "Optional"
            },
            {
              "name": "timeOfDay",
              "title": "Time of Day",
              "typeName": "text",
              "optionality": "Optional"
            }
          ],
          "values": [
            {
              "name": "coffeeOrder",
              "title": "Coffee Order",
              "typeName": "text",
              "optionality": "Mandatory"
            }
          ],
          "validations": []
        }
      ],
      "groups": [
        {
          "title": "Let's Shop!",
          "profileTypes": [
            "nandos",
            "tesco",
            "taylorSt"
          ]
        }
      ]
    }
  ]
}`);
}
