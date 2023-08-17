document.getElementById('deposit_btn').addEventListener('click',function(){
    const depositTotalValue = document.getElementById('deposite_fuild');
    const depositTotalValueString = depositTotalValue.value;
    const depositAmount = parseFloat(depositTotalValueString);
    depositTotalValue.value = '';
    
    
    const previousDepositElement = document.getElementById('previous_deposit');
    const previouDepositTotalString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previouDepositTotalString);

    if(isNaN(depositAmount)){
        alert('please insert number');
        return;
    }
    
    const newDepositAmount = previousDepositAmount + depositAmount;
    previousDepositElement.innerText = newDepositAmount;

    const previousBalanceElement = document.getElementById('total_balance');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);
    const newBalance = previousBalance + depositAmount;
    previousBalanceElement.innerText = newBalance;

    // withdraw section event start 
    document.getElementById('withdraw_btn').addEventListener('click',function(){
        const withdrawTotal = document.getElementById('withdraw_fuild');
        const withdrawTotalAmountString = withdrawTotal.value;
        const withdrawAmount = parseFloat(withdrawTotalAmountString);
        withdrawTotal.value = '';
        if(isNaN(withdrawAmount)){
            alert('please insert number');
            return;
        }
        
        const previousWithdrawElement = document.getElementById('previous_withdraw');
        const previousWithdrawAmountString = previousWithdrawElement.innerText;
        const previousWthdrawAmount = parseFloat(previousWithdrawAmountString);
        

        const balanceElement = document.getElementById('total_balance');
        const newBalanceTotalString = balanceElement.innerText;
        const newBalanceTotal = parseFloat(newBalanceTotalString);
        if(newBalanceTotal<withdrawAmount){
            alert('You have not sufficient balance');
            return;
        }
        const totalWithdraw = withdrawAmount + previousWthdrawAmount;
        previousWithdrawElement.innerText = totalWithdraw;

        const currentBalance = newBalanceTotal - withdrawAmount;
        balanceElement.innerText = currentBalance;
    })
})