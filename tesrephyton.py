import requests

API_URL = "https://ai.gitee.com/api/inference-api/models/hf-models/FLUX.1-dev"
headers = {
    "Authorization": "Bearer eyJpc3MiOiJodHRwczovL2FpLmdpdGVlLmNvbSIsInN1YiI6IjY2ODMzIn0.HgKIA8kllBmF9PeV0X_orMAkctxEpvOp4ArrlG9LqgP5sekuSXd3zzK8Yg_I1vjzZldxdEq4jWqT035LtSDeAQ",
    "Content-Type": "application/json"
}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

output = query({
    "inputs": "Astronaut riding a horse"
})

with open("output.png", "wb") as file:
	file.write(output)