![twiim](/img/twiim_logo_final.png)
====================================================

**Search and rate millions of tweets and users**
----------------------------------------------
Twiim has been created using **Javascript (Front-end's logic)** and **PHP (Back-end and DB connections)**.
Having said that, It's worth mentioning that relies hardly on the **Twitter's API**, as it retrieves from
there all the user's data in real-time.

![twiim's frontpage](/img/twiim_screenshot.png)


What's social rating about?
---------------------------

**Social rating is a great concept**. It's like when you were at school and you had to vote for class's president.
You can say, this is similar to "I like" buttons. Of course It is, but this time your vote will change things,
more precisely, the tweet's and user's influences. **It's not just about "share" content but value people**.

And... What do we get with that?
--------------------------------

It's easy, isn't it? With this concept you will be able to figure out easily **which people deserve your attention,
and which don't**. You won't follow more people without knowing their reputation and influence. And, if you like their
tweets, **you can vote them, and improve their reputation even further**!

Also, It's great for knowing our influence and if people like what we write. Before that you only could know
it by checking how many re-tweets did you have. But this is not accurate, because re-tweeting is mainly for
sharing more than rating. Furthermore, people don't like to give their opinions using their "official" accounts.
**Twiim is completely anonymous, so you can vote without log in** (and... It's "somehow regulated", so you can't
vote twice the same tweet)

How influence is calculated?
----------------------------

Influence is basically calculated with points. Every tweet starts with at least your followers' score (number of followers).
If that tweet has been re-tweeted, you will get 5 points more. And now the great part, if that tweet has been rated
positively in the website, you will get 1 extra point. Or 1 point less if was a negative one.
It's easy right? Let's see the formula:

Tweet Influence.

> ![tweet's influence](/img/it.png)

User Influence.
> ![user's influece](/img/Iu.png)

> Where BETA is the "followers' number", EPSILON is the "re-tweets' number",
  ALPHA[p] is the number of positives votes, and ALPHA[n] the number of negative votes.

Contributing
------------

If you'd like to contribute, just Fork the repository, create a branch with your changes and send a pull request. 
Don't forget appending your name to AUTHORS ;)


*Saturday, 2th February, 2013*
