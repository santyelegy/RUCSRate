import pymongo
from pymongo.server_api import ServerApi

client = pymongo.MongoClient("mongodb+srv://ruloser:ruloser123@rucsrate.gkak0vw.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))

mydb = client["maindb"]
mycol = mydb["Courses"]

count=0
object={}
all_object={}
with open("Courses_CS_2023_Spring.txt") as file:
    for line in file:
        if count==0:
            object["code"]=line[:-1]
        elif count==1:
            object["name"]=line[:-1]
        elif count==2:
            pass
        elif count==3:
            object["prof"]=line[:-1]
        elif count==4:
            all_object[object["code"]]=object
            object=dict()
        count+=1
        count%=5

istart=True
object={}
all_description={}
with open("Description_CS.txt", encoding='utf-8') as file:
    for line in file:
        if line=="\n":
            if 'name' in object:
                all_description[object['name']]=object
                object=dict()
                istart=True
        else:
            if istart:
                course=line.split("-")[:3]
                object['name']=course[0]+':'+course[1]+':'+course[2]
                istart=False
            else:
                if "description" in object:
                    object["description"]+=line
                else:
                    object["description"]=line

for key in all_object:
    all_object[key]["Topics"]=all_description[key]["description"]
    all_object[key]["Year"]=2022
    all_object[key]["Season"]="Winter"
    all_object[key]["Department"]="Computer Science"
    x = mycol.insert_one(all_object[key])