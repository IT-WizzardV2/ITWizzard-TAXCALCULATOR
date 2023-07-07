<!-- Copyright (C) 2023 IT-Wizzard. Alle rechten voorbehouden -->
<!DOCTYPE html>
<html>

<head>
    <title>BTW Calculator</title>
    <meta name="author" content="Lars de Rover">
    <meta name="description" content="IT-Wizzard - BTW Calculator">
    <meta name="keywords" content="IT-Wizzard, BTW, Calculator">
    <link rel="stylesheet" href="stylesheet.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
    <div class="container">
        <div class="logo">
            <img src="/images/logo-big.png" alt="Logo">
        </div>
        <h1>Btw berekenen</h1>

        <label for="btwPercentage">BTW-percentage:</label>
        <div class="input-container">
            <select id="btwPercentage" oninput="calculate()">
                <option value="0.21">21%</option>
                <option value="0.09">9%</option>
                <option value="0.06">6%</option>
            </select>
            <button class="copy-button unchecked" onclick="copyToClipboard('btwPercentage')">
                <i class="far fa-copy copy-icon"></i>
                <i class="fas fa-check checkmark"></i>
            </button>
        </div>

        <label for="exclBtw">Bedrag excl. btw:</label>
        <div class="input-container">
            <span class="euro-sign">&euro;</span>
            <input type="number" id="exclBtw" step="0.01" lang="nl" min="0" oninput="calculate()" pattern="[0-9,.]+">
            <button class="copy-button unchecked" onclick="copyToClipboard('exclBtw')">
                <i class="far fa-copy copy-icon"></i>
                <i class="fas fa-check checkmark"></i>
            </button>
        </div>

        <label for="btwAmount">BTW-bedrag:</label>
        <div class="input-container">
            <span class="euro-sign">&euro;</span>
            <input type="number" id="btwAmount" step="0.01" lang="nl" min="0" readonly disabled="">
            <button class="copy-button unchecked" onclick="copyToClipboard('btwAmount')">
                <i class="far fa-copy copy-icon"></i>
                <i class="fas fa-check checkmark"></i>
            </button>
        </div>

        <label for="inclBtw">Bedrag incl. btw:</label>
        <div class="input-container">
            <span class="euro-sign">&euro;</span>
            <input type="number" id="inclBtw" step="0.01" lang="nl" min="0" oninput="updateExclBtw()">
            <button class="copy-button unchecked" onclick="copyToClipboard('inclBtw')">
                <i class="far fa-copy copy-icon"></i>
                <i class="fas fa-check checkmark"></i>
            </button>
        </div>
    </div>

    <script src="font-awesome/js/all.min.js"></script>
    <script src="javascript.js"></script>
</body>

</html>