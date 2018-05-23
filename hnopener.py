#!/usr/bin/env python

import requests
import os

def get_stories(story_type):
    """ return top 30 stories

    story_type: one of 'top' or 'new'
    """
    return requests.get(
        "https://hacker-news.firebaseio.com/v0/{0}stories.json".format(story_type)
    ).json()[0:30]

def get_url(story_id):
    """ return url for a story """
    return requests.get("https://hacker-news.firebaseio.com/v0/item/{0}.json".format(story_id)).json()

def open_url(url):
    """ open url in default browser """
    os.system("open {0}".format(url))

def open_story_urls(story_type):
    """ if story has url, open it in default browser """
    for story in get_stories(story_type):
        url = get_url(story)
        if 'url' in url:
            open_url(url['url'])

def main():
    # Open Newest Page
    open_url("https://news.ycombinator.com/newest")

    # Open Top 30 Newest URLs
    open_story_urls('new')

    # Open Top Page
    open_url("https://news.ycombinator.com/news")

    # Open Top 30 Top URLs
    open_story_urls('top')

if __name__ == '__main__':
    main()