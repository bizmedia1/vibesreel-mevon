export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://mevonpay.com.ng/V1/createtempva", {
      method: "POST",
      headers: {
        "Authorization": process.env.MEVON_SECRET_KEY, // ⚠️ NO Bearer here for this endpoint
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
  type: "rubies",
  fname: "John",
  lname: "Doe",
  registration_number: "8675848"
})
    });

    const text = await response.text();

return res.status(200).json({
  raw_response: text
});

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
