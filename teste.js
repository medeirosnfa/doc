async function query(data) {
	const response = await fetch(
		"https://ai.gitee.com/api/inference-api/models/hf-models/FLUX.1-dev",
		{
			headers: {
			    "Authorization": "Bearer eyJpc3MiOiJodHRwczovL2FpLmdpdGVlLmNvbSIsInN1YiI6IjY2ODMzIn0.HgKIA8kllBmF9PeV0X_orMAkctxEpvOp4ArrlG9LqgP5sekuSXd3zzK8Yg_I1vjzZldxdEq4jWqT035LtSDeAQ",
			    "Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify(data)
		}
	);
	return response.blob();
}

query({
    "inputs": "(In a dramatic octagonal MMA-style arena) (Two imposing anthropomorphic warrior chefs dominate the composition, their full bodies captured to fill the frame with a dynamic presence) (The figure on the left: A jaguar warrior chef with spotted golden fur and glowing cybernetic enhancements, including a red cybernetic eye and biomechanical arms that combine futuristic technology with primal strength. His muscular body is adorned with tribal tattoos) (The figure on the right: A lion warrior chef with a majestic golden mane and biomechanical scales gleaming under the lights, his sharp claws exuding raw power and precision) (Cinematic lighting emphasizes his height and creates tension, with bright highlights accentuating the futuristic environment, characters framed with their full bodies to fill the entire vertical screen)."
}).then((response) => {
	// 使用文件...
	console.log(response);
});