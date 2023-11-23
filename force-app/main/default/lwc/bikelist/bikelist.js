import { LightningElement } from 'lwc';

export default class Bikelist extends LightningElement {
    bikelist = [
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef1"
            },
            "Name": "FUSE X1",
            "Product_Family__c": "@FuseRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 2500,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/fusex1.jpg",
            "Battery__c": "401Wh",
            "Charger__c": "41V4A",
            "Motor__c": "251 watt, 75Nm",
            "Fork__c": "Air spring",
            "Front_Brakes__c": "Dual-pivot caliper brake",
            "Rear_Brakes__c": "Dual-pivot caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef2"
            },
            "Name": "FUSE X2",
            "Product_Family__c": "@FuseRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 2600,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/fusex2.jpg",
            "Battery__c": "402Wh",
            "Charger__c": "42V4A",
            "Motor__c": "252 watt, 75Nm",
            "Fork__c": "Air spring",
            "Front_Brakes__c": "Dual-pivot caliper brake",
            "Rear_Brakes__c": "Dual-pivot caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef3"
            },
            "Name": "FUSE X3",
            "Product_Family__c": "@FuseRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 2700,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/fusex3.jpg",
            "Battery__c": "403Wh",
            "Charger__c": "43V4A",
            "Motor__c": "253 watt, 75Nm",
            "Fork__c": "Air spring",
            "Front_Brakes__c": "Dual-pivot caliper brake",
            "Rear_Brakes__c": "Dual-pivot caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef4"
            },
            "Name": "FUSE X4",
            "Product_Family__c": "@FuseRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 2800,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/fusex4.jpg",
            "Battery__c": "404Wh",
            "Charger__c": "44V4A",
            "Motor__c": "254 watt, 75Nm",
            "Fork__c": "Air spring",
            "Front_Brakes__c": "Dual-pivot caliper brake",
            "Rear_Brakes__c": "Dual-pivot caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef5"
            },
            "Name": "DYNAMO X1",
            "Product_Family__c": "@DynamoRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 7000,
            "Level__c": "Racer",
            "Category__c": "Mountain",
            "Material__c": "Carbon",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/dynamox1.jpg",
            "Battery__c": "501Wh",
            "Charger__c": "41V4A",
            "Motor__c": "281 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef6"
            },
            "Name": "DYNAMO X2",
            "Product_Family__c": "@DynamoRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 7200,
            "Level__c": "Racer",
            "Category__c": "Mountain",
            "Material__c": "Carbon",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/dynamox2.jpg",
            "Battery__c": "502Wh",
            "Charger__c": "42V4A",
            "Motor__c": "282 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef7"
            },
            "Name": "DYNAMO X3",
            "Product_Family__c": "@DynamoRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 7400,
            "Level__c": "Racer",
            "Category__c": "Mountain",
            "Material__c": "Carbon",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/dynamox3.jpg",
            "Battery__c": "503Wh",
            "Charger__c": "43V4A",
            "Motor__c": "283 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef8"
            },
            "Name": "DYNAMO X4",
            "Product_Family__c": "@DynamoRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 7800,
            "Level__c": "Racer",
            "Category__c": "Mountain",
            "Material__c": "Carbon",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/dynamox4.jpg",
            "Battery__c": "504Wh",
            "Charger__c": "44V4A",
            "Motor__c": "284 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef9"
            },
            "Name": "ELECTRA X1",
            "Product_Family__c": "@ElectraRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 4000,
            "Level__c": "Enthusiast",
            "Category__c": "Mountain",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax1.jpg",
            "Battery__c": "501Wh",
            "Charger__c": "41V4A",
            "Motor__c": "251 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef10"
            },
            "Name": "ELECTRA X2",
            "Product_Family__c": "@ElectraRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 4300,
            "Level__c": "Enthusiast",
            "Category__c": "Mountain",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax2.jpg",
            "Battery__c": "502Wh",
            "Charger__c": "42V4A",
            "Motor__c": "252 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef11"
            },
            "Name": "ELECTRA X3",
            "Product_Family__c": "@ElectraRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 4600,
            "Level__c": "Enthusiast",
            "Category__c": "Mountain",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax3.jpg",
            "Battery__c": "503Wh",
            "Charger__c": "43V4A",
            "Motor__c": "253 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef12"
            },
            "Name": "ELECTRA X4",
            "Product_Family__c": "@ElectraRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 4900,
            "Level__c": "Enthusiast",
            "Category__c": "Mountain",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg",
            "Battery__c": "504Wh",
            "Charger__c": "44V4A",
            "Motor__c": "254 watt, 75Nm",
            "Fork__c": "Air spring, adjustable rebound",
            "Front_Brakes__c": "Hydraulic disc, 200mm",
            "Rear_Brakes__c": "Hydraulic disc, 200mm"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef13"
            },
            "Name": "VOLT X1",
            "Product_Family__c": "@VoltRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 1200,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/voltx1.jpg",
            "Battery__c": "300Wh",
            "Charger__c": "21V4A",
            "Motor__c": "251 watt, 75Nm",
            "Fork__c": "Foldable",
            "Front_Brakes__c": "Centre-pull caliper brake",
            "Rear_Brakes__c": "Centre-pull caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef14"
            },
            "Name": "VOLT X2",
            "Product_Family__c": "@VoltRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 1400,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/voltx2.jpg",
            "Battery__c": "300Wh",
            "Charger__c": "42V4A",
            "Motor__c": "252 watt, 75Nm",
            "Fork__c": "Foldable",
            "Front_Brakes__c": "Centre-pull caliper brake",
            "Rear_Brakes__c": "Centre-pull caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef15"
            },
            "Name": "VOLT X3",
            "Product_Family__c": "@VoltRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 1800,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/voltx3.jpg",
            "Battery__c": "300Wh",
            "Charger__c": "23V4A",
            "Motor__c": "253 watt, 75Nm",
            "Fork__c": "Foldable",
            "Front_Brakes__c": "Centre-pull caliper brake",
            "Rear_Brakes__c": "Centre-pull caliper brake"
        },
        {
            "attributes": {
                "type": "Product__c",
                "referenceId": "Product__cRef16"
            },
            "Name": "VOLT X4",
            "Product_Family__c": "@VoltRef",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "MSRP__c": 1900,
            "Level__c": "Beginner",
            "Category__c": "Commuter",
            "Material__c": "Aluminum",
            "Picture_URL__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/voltx4.jpg",
            "Battery__c": "300Wh",
            "Charger__c": "24V4A",
            "Motor__c": "254 watt, 75Nm",
            "Fork__c": "Foldable",
            "Front_Brakes__c": "Centre-pull caliper brake",
            "Rear_Brakes__c": "Centre-pull caliper brake"
        }
    ];
}