# proxy server checker

This script can check if proxy server is live, and can access to specific website.


# The problem

If you have proxy servers list, and you need to check if every proxy is live, and can access to specific website.


# Usage

```
node checker.js input_file.csv output_file.csv http://test_website [ optional pseudo_threads_count ]
```


## Example


```
./checker.js ./input/proxy_list_example.csv ./result.csv "http://example.org/" 10
```

OR

```
node checker.js ./input/proxy_list_example.csv ./result.csv "http://example.org/" 10
```


# Requirements

nodejs v8+
