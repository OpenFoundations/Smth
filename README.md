JS:

1. Run: git clone --depth 1 https://github.com/andresriancho/w3af.git

2. Edit Target on each script

3. run w3af_api

4. run via node

----------------------------------------------------------------------------------

Python:

1. Run: git clone --depth 1 https://github.com/andresriancho/w3af.git

2. Make sure you have libxslt1-dev and libxml2-dev

3. Run: pip install zaproxy

4. start w3af_api from your cloned dir

5. Edit StartScan.py to hardcode site URL

6. Wait a few seconds and run GetFullScanResults.py |less
	Note: Scans can take a long time, so displayed results may be incomplete

7. Read the code, the important part is:
	 for key in vuln.resource_data:
		print key, ": ", vuln.resource_data[key]
	:-)

