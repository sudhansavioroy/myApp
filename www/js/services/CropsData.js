'use strict';

//var starter=angular.module('starter',[]);
starter.factory('cropsData', function($http) {
  return {
    crops:[
      {
        "name": "paddy",
        "type": "cereal",
        "sowings": [
          {
            "name": "sowing 1",
            "type": "example_one sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n",
                    "properties": [
                      {
                        "name": "property A",
                        "type": "example_one sowing",
                        "images": [
                          {
                            "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                            "crop": "Paddy",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-07-27T17:37:09.104042Z",
                            "imagetexts": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "6.0",
                                "day": -3,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "நாற்றங்கால் அமைத்தல்",
                                "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "7.0",
                                "day": 12,
                                "daysupto": 2,
                                "ordinalinday": "2.0",
                                "name": "நோய் பூச்சி கண்காணிப்பு",
                                "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                              }
                            ]
                          },
                          {
                            "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                            "crop": "Tomato",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-08-28T16:05:33.263138Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "1.0",
                                "day": -50,
                                "daysupto": 5,
                                "ordinalinday": "1.0",
                                "name": "தழைஉரம் செடிவிதைத்தல்",
                                "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "45.0",
                                "day": 105,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                                "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "sowing 2",
                        "type": "example_two sowing",
                        "protocols": [
                          {
                            "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                            "crop": "Groundnut",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-07-27T17:37:09.104042Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "6.0",
                                "day": -3,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "நாற்றங்கால் அமைத்தல்",
                                "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "7.0",
                                "day": 12,
                                "daysupto": 2,
                                "ordinalinday": "2.0",
                                "name": "நோய் பூச்சி கண்காணிப்பு",
                                "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                              }
                            ]
                          },
                          {
                            "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                            "crop": "Paddy",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-08-28T16:05:33.263138Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "1.0",
                                "day": -50,
                                "daysupto": 5,
                                "ordinalinday": "1.0",
                                "name": "தழைஉரம் செடிவிதைத்தல்",
                                "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "45.0",
                                "day": 105,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                                "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது.",
                    "properties": [
                      {
                        "name": "property A",
                        "type": "example_one sowing",
                        "images": [
                          {
                            "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                            "crop": "Paddy",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-07-27T17:37:09.104042Z",
                            "imagetexts": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "6.0",
                                "day": -3,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "நாற்றங்கால் அமைத்தல்",
                                "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "7.0",
                                "day": 12,
                                "daysupto": 2,
                                "ordinalinday": "2.0",
                                "name": "நோய் பூச்சி கண்காணிப்பு",
                                "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                              }
                            ]
                          },
                          {
                            "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                            "crop": "Tomato",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-08-28T16:05:33.263138Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "1.0",
                                "day": -50,
                                "daysupto": 5,
                                "ordinalinday": "1.0",
                                "name": "தழைஉரம் செடிவிதைத்தல்",
                                "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "45.0",
                                "day": 105,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                                "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "sowing 2",
                        "type": "example_two sowing",
                        "protocols": [
                          {
                            "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                            "crop": "Groundnut",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-07-27T17:37:09.104042Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "6.0",
                                "day": -3,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "நாற்றங்கால் அமைத்தல்",
                                "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "7.0",
                                "day": 12,
                                "daysupto": 2,
                                "ordinalinday": "2.0",
                                "name": "நோய் பூச்சி கண்காணிப்பு",
                                "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                              }
                            ]
                          },
                          {
                            "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                            "crop": "Paddy",
                            "protocoltype": "test set",
                            "notes": "Test Set",
                            "timecreated": "2016-08-28T16:05:33.263138Z",
                            "practices": [
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Preparation",
                                "ordinalinsection": "1.0",
                                "day": -50,
                                "daysupto": 5,
                                "ordinalinday": "1.0",
                                "name": "தழைஉரம் செடிவிதைத்தல்",
                                "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                              },
                              {
                                "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                                "protocolsection": "Crop growing",
                                "ordinalinsection": "45.0",
                                "day": 105,
                                "daysupto": 1,
                                "ordinalinday": "1.0",
                                "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                                "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Tomato",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          },
          {
            "name": "sowing 2",
            "type": "example_two sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Groundnut",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "tomatto",
        "type": "vegetable",
        "sowings": [
          {
            "name": "sowing 7",
            "type": "example_one sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Tomato",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          },
          {
            "name": "sowing 20",
            "type": "example_two sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Groundnut",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "brinjal",
        "type": "vegetable",
        "sowings": [
          {
            "name": "sowing 11",
            "type": "example_one sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Tomato",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          },
          {
            "name": "sowing 21",
            "type": "example_two sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Groundnut",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "redgram",
        "type": "pulses",
        "sowings": [
          {
            "name": "sowing 100",
            "type": "example_one sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Tomato",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          },
          {
            "name": "sowing 200",
            "type": "example_two sowing",
            "protocols": [
              {
                "name": "2016-07-27-Paddy-Paiyur-Madhavan-paddy-dhans-nursery-tamil-1",
                "crop": "Groundnut",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-07-27T17:37:09.104042Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "6.0",
                    "day": -3,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "நாற்றங்கால் அமைத்தல்",
                    "description": "30 மீட்டர் நீளமும், 1.5 மீட்டர் அகலமும் 15 சென்டி மீட்டர் உயரமும் கொண்ட உயர் பாத்தி ஒன்றை அமைக்கவும். அதன் மேலாக மக்கிய தொழு உரத்தை தூவி மேலாக கிளறி விடவும்.\r\n"
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/49/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "7.0",
                    "day": 12,
                    "daysupto": 2,
                    "ordinalinday": "2.0",
                    "name": "நோய் பூச்சி கண்காணிப்பு",
                    "description": "தண்டு துளைப்பனும், இலை கருகலும் தாக்கும் நேரம். கவனம் தேவை. நாற்றங்காலை தினம் ஒருமுறை சுற்றி வந்து பூச்சிகளோ, முட்டையோ இருக்கின்றதா என்றும் அவை தாக்கியதற்கான அறிகுறிகள் இருக்கிறதா எனவும் பார்க்கவும். இதை கண்டுபிடிக்க எதுவாக கீழே சில படங்கள் தரப்பட்டுள்ளது."
                  }
                ]
              },
              {
                "name": "2016-08-28-Paddy-Andipattipudur-Ravishankar-paddy-dhans-tamil-1",
                "crop": "Paddy",
                "protocoltype": "test set",
                "notes": "Test Set",
                "timecreated": "2016-08-28T16:05:33.263138Z",
                "practices": [
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Preparation",
                    "ordinalinsection": "1.0",
                    "day": -50,
                    "daysupto": 5,
                    "ordinalinday": "1.0",
                    "name": "தழைஉரம் செடிவிதைத்தல்",
                    "description": "தக்கை பூண்டு விதைகளை (தேய்ச்சா) உழுத நிலத்தில் விதைக்கவும். கூடவே அடியுரமாக ஜின்க் சல்பேட் இடவும். வழக்கம் போல ட்ராக்டர் கொண்டு நிலத்தை விதைகள் மூடுமாறு உழவும். தக்கை பூண்டு விதைகள் முளைத்து வளர மழையே போதுமானது. தேவையெனில் ஓரிரு முறை நீர்பாய்ச்சவும். "
                  },
                  {
                    "protocol": "http://192.168.1.5:8000/webservice/protocol/53/",
                    "protocolsection": "Crop growing",
                    "ordinalinsection": "45.0",
                    "day": 105,
                    "daysupto": 1,
                    "ordinalinday": "1.0",
                    "name": "பிரௌன் பிளான்ட் ஹாப்பர் எச்சரிக்கை (BPH) ",
                    "description": "பிரௌன் பிளான்ட் ஹாப்பர் தாக்கும் தருணம். செடிகளை பிடித்து மெல்ல வளைத்து லேசாக தட்டினால் நீர்பரப்பின் மீது பூச்சிகள் விழுவதை பார்க்கலாம். சுமார் 20 அல்லது 30 செடிகளில் இந்த பூச்சிகள் இருக்கிறதா என்று பார்க்கவும். அதே போல இந்த செடிகளில் கீழ்வரும் அறிகுறிகள் ஏதேனும் தென்படுகிறதா என்றும் பார்க்கவும் (அ) பிறை வடிவ முட்டைகள் இலைக்கு அடியில் நடு நரம்பின் அருகில் தென்படும். (ஆ) வெள்ளை அல்லது பிரௌன் நிற இளம் பூச்சிகள் தென்படும் (இ) செடியின் அடிப்பகுதியில் தேன் துளியோ கருகிய பூஞ்சானே தென்படும்.\r\n"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
	});
