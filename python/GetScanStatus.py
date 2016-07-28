#!/usr/bin/python 

from w3af_api_client import Connection, Scan
import requests
import re
import inspect

# Connect to the REST API and get it's version
conn = Connection('http://127.0.0.1:5000/')
print conn.get_version()

#scan = Scan(conn)
#scan.start(scan_profile, target_urls)
scans = conn.get_scans()
for scan in scans:
	print scan.status

		
