import pymongo
from pymongo.server_api import ServerApi

client = pymongo.MongoClient(
    "mongodb+srv://ruloser:ruloser123@rucsrate.gkak0vw.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))

mydb = client["maindb"]
mycol = mydb["Courses"]
tocol = mydb["Professor"]

'''
i = 0
for x in mycol.find():
    i += 1
    obj = {}
    obj['Name'] = x['prof']
    obj['Email'] = ''
    obj['Score'] = 0
    obj['Department'] = x['Department']
    y = tocol.insert_one(obj)
    print(i, "times:", obj)
'''

i = 0
for x in tocol.find():
    i += 1
    print(i, "times:", x)
