1. Run: git clone --depth 1 https://github.com/andresriancho/w3af.git

1.1: Make sure you have libxslt1-dev and libxml2-dev
1.2: Run: pip install zaproxy

2. start w3af_api from your cloned dir

3. Edit StartScan.py to hardcode site URL

4. Wait a few seconds and run GetFullScanResults.py |less
	Note: Scans can take a long time, so displayed results may be incomplete

5. Read the code, the important part is:
	 for key in vuln.resource_data:
		print key, ": ", vuln.resource_data[key]
	:-)

