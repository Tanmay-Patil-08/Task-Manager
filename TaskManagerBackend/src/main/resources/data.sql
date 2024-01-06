insert into task (ID,TARGET_DATE,DESCRIPTION,USERNAME,STATUS,SKILL,PRIORITY) values (1001,CURRENT_DATE()+1,'Create data pipeline','Tanmay','Planing','MongoDb',1),
                                                                                    (1002,CURRENT_DATE()+1,'Plan the Api','Tanmay','Planing','Java',2),
                                                                                    (1003,CURRENT_DATE()+1,'Create frontend using react','Tanmay','Development','JavaScript',3),
                                                                                    (1004,CURRENT_DATE()+1,'Deploy the Website','Tanmay','Deployment','AWS',2);
insert into COMPLETED_TASK(ID,DESCRIPTION) values (1001,'Set up Docker'),
                                                  (1002,'Establish Websocket'),
                                                  (1003,'Backend planing');
