# Crawlang

A simple language that generates puppeteer JS Code

### Usage

```bash
node . input.crawl
```

### Input

Input is a ```.crawl``` file like this sample:
```crawl
set headless, false
set defaultViewport, null

start
    # Set size to Full HD
    size 1920, 1080
    goto https://www.google.com
    type input.gLFyf.gsfi, 'COVID-19\n'
    wait navigation
    screenshot 'out.png'
end
```

### Default output

The result of the code will be printed on the terminal after the compilation is done.
### Output file

You can pipe the output to a file using the ``--output path/to/file.js`` or ``-o path/to/file.js`` flag. This will create a new file with the output JavaScript.

### Compile and Run

If you want to compile and run directly, you can use the ``--exec`` ou ``-e`` flag. This will compile and run the result code directly.

### Commands and rules

The available commands are [here](src/util/operations.js) and the rules for each is [here](src/util/rules.js).