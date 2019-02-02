INSERT INTO users(USERNAME,PASSWORD,SIGNUP_DATE,PHONE,EMAIL,PROVIDER_QTY,RECEIVER_QTY,RATING_PROVIDER,RATING_RECEIVER)
    VALUES ("roger","123456",2019-01-31,"000000000","user@gmail.com",5,1,3.56,2.59),
           ("chris","abcdef",2019-02-01,"646123456","user@aol.com",0,6,0,5);
INSERT INTO services( USER_ID,NAME,TYPE,TAGS,DESCRIPTION,AVAILABILITY,PRICING,LOCATION,MAX_DISTANCE,PAYMENT,MIN_DURATION)
    VALUES (00000001,"Dancer for hire","Musical/Arts","[dance,salsa,chachacha,tango]", "Venga dancar el Tango!",
    "{'0':'Weekly','monday':'[15.00,19.00]','tuesday':'[15.00,19.00]'}",
    "[{'name':'salsa','pricing':40,'description':'me gusta mamasitas'},{'name':'tango','pricing':'50','description':'maybe for free IUKWIM!'}]",
    "[40.726078,-74.145177]",5000,"{'type':['cash'],'when':['after']}","1.30"),
    (00000001,"Male babysitter","Home assistance","['baby','child','babysitter','sitter']","I like to take care of children",
    "{'0':'Daily','times':'[08.30,11.30]'}","[{'name':'babies','pricing':'60','description':'babies make a lot of mess!'},{'name':'children','pricing':'40','description':'noughty,noughty'}]",
    "[40.688601,-73.944676]",5000,"{'type':['cash','check'],'when':['before','after','either','splitted','multiple']}","3");

INSERT INTO requests(USER_ID,NAME,TYPE,TAGS,DESCRIPTION,DEADLINE,DURATION,LOCATION,FREQUENCY,REQUIREMENTS,PRICE_REQUESTED)
VALUES (00000002,"Need help relocating beehive!","Delivery/Courier","[bee,honey,animal,nature,hyppie,peaceandlove]",
"The bees built a hive on my front porch but I don't want them killed! I love all animals!",2019-02-05,"Flexible","[40.605869,-74.080632]",
NULL, "['experience handling bugs','MUST be an animal lover','protective vest useful but not required']", "100$ but accepts weed equivalent");
