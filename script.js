// สลับแท็บ
function openTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// แสดงรูปภาพพรีวิว
document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("previewImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
});

// ฟังก์ชันวิเคราะห์ (ตัวอย่างจำลอง)
document.getElementById("analyzeButton").addEventListener("click", async () => {
    const image = document.getElementById("imageInput").files[0];
    const resultText = document.getElementById("resultText");

    if (!image) {
        resultText.textContent = "กรุณาอัปโหลดรูปภาพก่อน!";
        return;
    }

    // ตัวอย่างจำลอง (สามารถต่อ API Vision จริงได้ เช่น Teachable Machine, TensorFlow, หรือ OpenAI Vision)
    resultText.textContent = "กำลังวิเคราะห์...";
    setTimeout(() => {
        const shoeTypes = ["Sneakers", "Boots", "Sandals", "Heels", "Loafers"];
        const randomType = shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
        resultText.textContent = `AI ตรวจพบว่าเป็นรองเท้าประเภท: ${randomType}`;
    }, 2000);
});

// ฟังก์ชันค้นหารองเท้า
function searchShoes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultList = document.getElementById("searchResults");
    resultList.innerHTML = "";

    const shoes = ["Nike Air Max", "Adidas Ultraboost", "Converse All Star", "Vans Old Skool", "Puma Suede"];

    const results = shoes.filter(shoe => shoe.toLowerCase().includes(input));
    if (results.length === 0) {
        resultList.innerHTML = "<li>ไม่พบผลการค้นหา</li>";
    } else {
        results.forEach(shoe => {
            const li = document.createElement("li");
            li.textContent = shoe;
            resultList.appendChild(li);
        });
    }
}