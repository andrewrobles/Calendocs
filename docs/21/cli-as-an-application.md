[CLI as an Application](../21.md)

> Can a CLI be considered an app?

Yes, a CLI (Command Line Interface) program can absolutely be considered an application (or "app"). [1, 2, 3, 4] 
While casual users usually associate the word "app" with visual, tap-and-click smartphone software or desktop windows, developers and computer scientists use "application" to describe any software program designed to help a user perform specific tasks. The text-only nature of a CLI is simply the presentation layer, not a definition of what the software is. [5, 6, 7, 8] 
Here is a breakdown of why a CLI qualifies as an app and how it fits into the software ecosystem:
## 🌐 The Definition of an "App"
An application software (app) stands in contrast to system software (like the operating system kernel or drivers). If a program exists to allow an end-user to execute a functional task—such as editing text, downloading a file, or managing a database—it is an application, regardless of its user interface. [9, 10, 11, 12, 13] 
## 🔀 Interface Types: CLI vs. GUI vs. TUI
An application can be built with different "faces" depending on its target audience and use case: [14, 15] 

* 
* CLI (Command Line Interface): The user interacts strictly by typing sequential text commands, arguments, and flags (e.g., git clone).
* TUI (Text-based User Interface): The application stays inside the terminal but uses advanced text characters to draw boxes, interactive menus, and colors (e.g., lazygit, htop).
* GUI (Graphical User Interface): The app uses windows, buttons, icons, and mouse/touch pointers (e.g., Google Chrome). [3, 8, 16, 17, 18] 
* 

## 🛠️ Common Examples of CLI Apps
Many powerful, standalone applications exist entirely without a graphical window. Developers explicitly call these "CLI apps" or "CLI tools": [3, 19] 

* 
* ffmpeg: A highly complex application used for converting, streaming, and editing audio and video.
* git: A core version-control application used globally by software engineers.
* npm / pip: Package managers that act as application marketplaces to download libraries entirely from the command line.
* neovim / vim: Full-featured text and code editing applications that run entirely inside a shell terminal. [20, 21, 22] 
* 

## 🔄 Dual-Interface Applications
Many software packages are a single core engine bundled with both GUI and CLI variants. For instance, the Docker application can be controlled visually through Docker Desktop (GUI) or programmatically via the docker command string (CLI). [5, 14, 23, 24, 25] 
If you are thinking about building or using one, would you like to know about the best frameworks to build a CLI app or how to package a CLI tool so others can install it?

[1] [https://jdxcode.medium.com](https://jdxcode.medium.com/12-factor-cli-apps-dd3c227a0e46)
[2] [https://aws.amazon.com](https://aws.amazon.com/what-is/cli/)
[3] [https://xebia.com](https://xebia.com/blog/go-cli-apps/)
[4] [https://medium.com](https://medium.com/skilllane/build-an-interactive-cli-application-with-node-js-commander-inquirer-and-mongoose-76dc76c726b6)
[5] [https://www.reddit.com](https://www.reddit.com/r/golang/comments/1cjovdd/best_practice_for_creating_a_gui_app_and_a_cli/)
[6] [https://www.adjust.com](https://www.adjust.com/glossary/application/)
[7] [https://github.com](https://github.com/resources/articles/what-is-a-cli)
[8] [https://www.reddit.com](https://www.reddit.com/r/linux4noobs/comments/1b1oe9x/command_vs_console_application/)
[9] [https://www.computerlanguage.com](https://www.computerlanguage.com/results.php?definition=application+program)
[10] [https://retrocomputing.stackexchange.com](https://retrocomputing.stackexchange.com/questions/27236/difference-between-program-and-application)
[11] [https://www.wallarm.com](https://www.wallarm.com/what/what-are-application-services)
[12] [https://nirajpaul2.medium.com](https://nirajpaul2.medium.com/app-state-application-life-cycle-view-state-7f81b2a1fe5a)
[13] [https://www.reddit.com](https://www.reddit.com/r/commandline/comments/yplty5/help_me_understand_command_line_applications/)
[14] [https://www.reddit.com](https://www.reddit.com/r/commandline/comments/yplty5/help_me_understand_command_line_applications/)
[15] [https://stackoverflow.com](https://stackoverflow.com/questions/18984/what-do-you-think-of-developing-for-the-command-line-first)
[16] [https://www.reddit.com](https://www.reddit.com/r/commandline/comments/1epjppl/10_cli_tools_that_made_the_biggest_impact_on/)
[17] [https://zapier.com](https://zapier.com/blog/what-is-cli/)
[18] [https://medium.com](https://medium.com/@chrysophilist/from-cli-to-gui-to-tui-why-developers-are-going-back-to-terminal-c6a27aab1375)
[19] [https://www.howtogeek.com](https://www.howtogeek.com/reasons-cli-apps-are-better-than-gui-alternatives-on-linux/)
[20] [https://apple.stackexchange.com](https://apple.stackexchange.com/questions/400997/can-anyone-explain-to-me-the-difference-between-terminal-apps-cli-clt-and-prom)
[21] [https://www.reddit.com](https://www.reddit.com/r/linuxquestions/comments/pghfap/what_are_some_cli_apps_that_someone_should_not/)
[22] [https://dev.to](https://dev.to/bboyakers/what-is-a-cli-53a6)
[23] [https://nordicapis.com](https://nordicapis.com/the-return-of-the-cli-clis-being-used-by-api-related-companies/)
[24] [https://stackoverflow.com](https://stackoverflow.com/questions/40022125/do-all-applications-have-a-command-line-interface)
[25] [https://www.geeksforgeeks.org](https://www.geeksforgeeks.org/devops/docker-cli-vs-docker-desktop/)

