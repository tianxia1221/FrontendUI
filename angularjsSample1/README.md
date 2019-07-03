# Description
Getting started with angularjs on Windows

# Enviroment

- *webstorm IDE*

Download webstorm as angularjs Dev IDE.

- *Node*:

1. Download node installation package node-version.msi https://nodejs.org/en/download/current/

2. Install node (npm is included in node package)

3. Install bower (bower: Get the angular libs)
    ```bash
    $ npm install -g bower
    ```

# Steps
1. Create an empty project

2. Create basic folders
   ```bash
   public
        js
        css
        img
   ```
3. Configure and initialize bower
    ```bash
    $ bower init
    ```

4. Configure .bowerrc file
    ```
    //.bowerrc
    {
      "directory": "public/components"
    }
    ```
5. Install angularjs lib
    ```bash
    $ bower install angular#1.5.0-rc.0 --save
    ```

6. Create index.html file and run it.