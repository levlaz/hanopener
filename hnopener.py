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

def main():
    # Open Newest Page
    os.system("open https://news.ycombinator.com/newest")

    # Open Top 30 Newest URLs
    for story in get_stories('new'):
        url = get_url(story)
        if 'url' in url:
            os.system("open {0}".format(url['url']))

    # Open Top Page
    os.system("open https://news.ycombinator.com/news")

    # Open Top 30 Top URLs
    for story in get_stories('top'):
        url = get_url(story)
        if 'url' in url:
            os.system("open {0}".format(url['url']))

if __name__ == '__main__':
    main()