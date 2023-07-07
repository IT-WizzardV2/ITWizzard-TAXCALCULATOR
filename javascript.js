// Copyright (C) 2023 IT-Wizzard. Alle rechten voorbehouden.

// Add event listeners to input fields
        document.getElementById("exclBtw").addEventListener("input", restrictInput);
        document.getElementById("btwAmount").addEventListener("input", restrictInput);
        document.getElementById("inclBtw").addEventListener("input", restrictInput);

        // Event listener callback function to restrict input
        function restrictInput(event) {
            const input = event.target;
            const caretPosition = input.selectionStart;
            const sanitizedValue = input.value.replace(/[^0-9.,]/g, '');
            const hasComma = sanitizedValue.indexOf(',') !== -1;
            const hasPeriod = sanitizedValue.indexOf('.') !== -1;

            if (sanitizedValue !== input.value) {
                const diff = sanitizedValue.length - input.value.length;
                const newCaretPosition = caretPosition + diff;

                input.value = sanitizedValue;
                input.setSelectionRange(newCaretPosition, newCaretPosition);
            }

            if (hasComma && hasPeriod) {
                input.value = input.value.replace(/,/g, '');
            }
        }

        function calculate() {
            let exclBtw = parseFloat(document.getElementById("exclBtw").value.replace(',', '.'));
            const btwPercentage = parseFloat(document.getElementById("btwPercentage").value);

            if (isNaN(exclBtw)) {
                exclBtw = 0;
            }

            const btwAmount = exclBtw * btwPercentage;
            const inclBtw = exclBtw + btwAmount;

            document.getElementById("btwAmount").value = btwAmount.toFixed(2);
            document.getElementById("inclBtw").value = inclBtw.toFixed(2);
        }

        function updateExclBtw() {
            const inclBtw = parseFloat(document.getElementById("inclBtw").value.replace(',', '.'));
            const btwPercentage = parseFloat(document.getElementById("btwPercentage").value);

            if (isNaN(inclBtw)) {
                inclBtw = 0;
            }

            const exclBtw = inclBtw / (1 + btwPercentage);
            const btwAmount = inclBtw - exclBtw;

            document.getElementById("exclBtw").value = exclBtw.toFixed(2);
            document.getElementById("btwAmount").value = btwAmount.toFixed(2);
        }

        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const value = element.value;

            navigator.clipboard.writeText(value).then(function() {
                markAsCopied(element);
            }, function() {
                alert("Het kopiëren is mislukt.");
            });
        }

        function markAsCopied(element) {
            const copyButton = element.nextElementSibling;
            copyButton.classList.add("checked");
            copyButton.classList.remove("unchecked");

            setTimeout(function() {
                copyButton.classList.remove("checked");
                copyButton.classList.add("unchecked");
            }, 1000);
        }