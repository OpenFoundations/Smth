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
#	print scan.get_urls()
	for vuln in scan.get_findings():
		for key in vuln.resource_data:
			print key, ": ", vuln.resource_data[key]	
		try:
			traffic = vuln.get_traffic()
			for raw_data in (traffic):
				print "Request: ", raw_data.request, "\n"
				print "Response: ", raw_data.response, "\n"
		except:
			print "No data, check manually the provided link"
#	break

		
