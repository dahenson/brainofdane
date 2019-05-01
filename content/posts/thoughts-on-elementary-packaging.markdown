+++
date = 2014-08-27T00:00:00Z
draft = false
title = "Thoughts on elementary Packaging"

+++

This is my rudimentary understanding of the evolution of package management in Linux, and why it's still a problem for the average user.

In the beginning, there was source code. If you wanted an application on Linux, you went out, grabbed the "tarball" (the Linux equivalent of a zip/compressed folder) and compiled the source code on your machine. If that application required any other software, you had to download that and compile it too.

For Windows and Mac users, this was a major deal breaker so they slunk back to their walled garden and complained that Linux was hard and stupid. I don't blame them. Can you imagine coming from a world of one-click installers only to be faced with source code and the command prompt? It's like going from using a simple toaster to building a fire and putting your bread on a stick. You still get the job done, but with far more effort than necessary.

### Management of Packages
Eventually, Linux grew out of its pragmatic, backwards ways and developed standardized package management systems. Volunteers all over the world would compile the applications for you and leave them in web repositories for you to download. Furthermore, if that application needed any other software, the package manager would download and install those too. It was a complete solution, and elegantly solved a lot of different problems all at once.

*As an aside, let me say that this is one of the great strengths of Linux. Instead of copying the "competition", they blew everyone away with automated, centralized packaging systems--an app store before there was an app store. It may have taken them a while to get it right, but package management revolutionized the way Linux distributions were used.*

### Return of the Command Prompt
When Ubuntu took the scene with their refined desktop OS, they took package management a step further. First, they created [launchpad](https://launchpad.net) as a way for developers to automate their package management. Now, developers merely have to create a few scripts and their source code magically becomes a package that can be downloaded and installed by any Ubuntu user.

This was not necessarily new. It was a free centralized service, which greatly improved the process. What was new was the ability to create Personal Package Archives (PPAs). With a PPA, developers could create development repositories for users to easily test the latest *development* versions of their applications without compiling them.

Why do I emphasize that these are development repositories? Because Ubuntu has an app store, and they still exclusively require applications to be submitted and tested by trained individuals. There are still a handful of stable repositories with approved software, and anything else may or may not work as advertised.

Not all developers have submitted to the app store, and not all submitted applications make it through the process. I have heard that the approval process is long, and some applications merely get stuck in limbo. For this reason, most savvy users just add the development repositories at the risk of installing an unstable version.

How do they add these repositories? Like this:

```
sudo add-apt-repository ppa:somerepo/app
sudo apt-get update
sudo apt-get install app
```

There's that command prompt again.

### The elementary Developer
Now we're getting down to the crux of the problem. I have nothing against public repositories, or app stores, or developing in the open with unstable PPAs. My main issue stems from the fact that elementary OS does not have an app store, and does not have a separate stable repository for third-party applications.

Instead, the myriad of third-party applications cropping up are resorting to the lowest barrier of entry, which is PPAs. They develop a great application, figure out how to automate packaging, and then say "come get it in my PPA!"

I am the worst offender with [agenda](https://launchpad.net/agenda-tasks).

This wouldn't be a problem if two things were fixed:

1. Make adding PPAs one-click simple *by default* in elementary OS without using the command line. (highly unlikely)
2. Encourage developers to create a stable branch for their PPA, and *test, test, test* before releasing.

I tend to hold elementary developers to a much higher standard than the rest of the Linux community. elementary OS strives to provide a first-class experience for all users. A first-class experience that doesn't require dropping into the command prompt, or dealing with bleeding-edge development branches.

If the core OS doesn't have a release cycle because its developers strive for perfection, why shouldn't third-party developers do the same? We would all benefit from a higher standard of excellence in the community.

### An Interim Solution
Some might say that we'll just wait for Freya+1, when the OS finally has a managed app store. While I have the utmost confidence in those guys and gals, I wouldn't hold my breath for a managed app store. We need a solution right now for the influx of users chomping at the bit to take stable Freya for a spin.

My suggestion is that developers take a cue from the big dogs like Google (Chrome), Steam, and Skype. All of these have downloadable packages directly from their official site.

This approach does two things. First, it drives developers towards the goal of stability. If you have to make one version of the package available, how much harder are you going to work to make it void of bugs?

Second, there is a mechanism for adding your stable PPA during installation. I know it can be done, but I'm not quite sure how yet. This is why when you install Steam or Chrome, you also get automatic updates. The package adds the PPA to your system and every time your system checks for updates, it also checks the application's repository. Developers rejoice! No need for writing your own update system. You can have this one for free!

In the end, I am just really tired of having to add PPAs that are usually pointing at the current development code base. We can do better, and we should.

If you have any other thoughts or comments, feel free to share on your social network of choice and tag me. I am but one man, and I have but one viewpoint.
