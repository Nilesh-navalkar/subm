from django.shortcuts import render,redirect
from django.contrib import messages
import requests

# Create your views here.
def home(request):
    response=requests.get('https://www.reddit.com/r/images/new.json?limit=30',headers = {"User-agent": "Mozilla/5.0"}).json()
    post_url=[]
    #ups
#subreddit_name_prefixed
#title
    for post in response['data']['children']:
        l=[post['data']['url'],post['data']['title'],post['data']['ups'],post['data']['subreddit']]
        post_url.append(l)
    return render(request,'child.html',{'post_url':post_url})
