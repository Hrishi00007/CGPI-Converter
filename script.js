function calculateCGPI(pointers, university) {
    const gradingScales = {
      mumbai: {
        '10': 10,
        '9.9':9.9,
        '9.8':9.8,
        '9.7':9.7,
        '9.6':9.7,
        '9.5':9.6,
        '9.4':9.4,
        '9.3':9.3,
        '9.2':9.2,
        '9.1': 9.1,
        '9': 9,
        '8.9':8.9,
        '8.8':8.8,
        '8.7':8.7,
        '8.6':8.6,
        '8.5': 8.5,
        '8.4': 8.4,
        '8.3': 8.3,
        '8.2': 8.2,
        '8.1': 8.1,
        '8': 8,
        '7.9':7.9,
        '7.8':7.8,
        '7.7':7.7,
        '7.6':7.6,
        '7.5': 7.5,
        '7.4': 7.4,
        '7.3': 7.3,
        '7.2': 7.2,
        '7.1': 7.1,
        '7': 7,
        '6.9': 6.9,
        '6.8': 6.8,
        '6.7': 6.7,
        '6.6': 6.6,
        '6.5': 6.5,
        '6.4': 6.4,
        '6.3': 6.3,
        '6.2': 6.2,
        '6.1': 6.1,
        '6': 6,
        '5.9':5.9,
        '5.8':5.8,
        '5.7':5.7,
        '5.6':5.6,
        '5.5':5.5,
        '5.4':5.4,
        '5.5': 5.5,
        '5.4':5.4,
        '5.3':5.3,
        '5.2':5.2,
        '5.1':5.1,
        '5': 5,
        '4.9':4.9,
        '4.8':4.8,
        '4.7':4.7,
        '4.6':4.6,
        '4.5':4.5,
        '4.3':4.3,
        '4.2':4.2,
        '4.1':4.1,
        '4': 4,
        '0': 0,
      },
      pune: {
        '10': 9.5,
        '9.5': 9,
        '9': 8.5,
        '8.5': 8,
        '8': 7.5,
        '7.5': 7,
        '7': 6.5,
        '6.5': 6,
        '6': 5.5,
        '5.5': 5,
        '5': 4.5,
        '4.5': 4,
        '4': 0,
        '0': 0,
      },
    };
  
    const gradingScale = gradingScales[university];
    
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    for (const pointer of pointers) {
      const creditScore = gradingScale[parseFloat(pointer).toFixed(1)]; // Handle floating-point numbers to one decimal place
      if (creditScore !== undefined) {
        totalGradePoints += creditScore;
        totalCredits += 1;
      }
    }
  
    if (totalCredits === 0) {
      return { cgpi: 0, percentage: 0 };
    }
  
    const cgpi = (totalGradePoints / totalCredits).toFixed(2);
    const percentage = ((cgpi / 10) * 100).toFixed(2);
  
    return { cgpi, percentage };
  }
  
  const universitySelect = document.getElementById('university');
  const pointerInput = document.getElementById('pointerList');
  const calculateButton = document.getElementById('calculateButton');
  const cgpiValue = document.getElementById('cgpiValue');
  const percentageValue = document.getElementById('percentageValue');
  
  calculateButton.addEventListener('click', () => {
    const university = universitySelect.value;
    const pointersList = pointerInput.value.split(',').map(pointer => pointer.trim());
  
    const { cgpi, percentage } = calculateCGPI(pointersList, university);
  
    cgpiValue.textContent = `Your CGPI is: ${cgpi}`;
    percentageValue.textContent = `Your Percentage is: ${percentage}%`;
  
    document.getElementById('result').style.display = 'block';
  });
  