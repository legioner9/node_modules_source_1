# http proxy scanner

## Problem

This tool can scan a lot of addresses for opened http proxy.


## Usage 

```
node scanner.js ipv4_start_add ipv4_stop_addr out_file.csv [ optional pseudo_threads_count ]
```


## Example

```
node scanner.js 5.135.100.0 5.135.255.255 ./result.csv 5
```


## Requirements

nodejs v6+


## Issues

If you set up to many pseudo_threads_count, you have to increase node max-old-space-size

```
node --max-old-space-size=8192 scanner.js 127.0.0.0 127.255.255.255 ./out_file.csv 10000
```


