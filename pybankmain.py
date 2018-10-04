
##import dependencies##
import os
import csv

#Import the CSV file
budget_data = os.path.join('Resources', 'budget_data.csv')

##variable placeholders##

Sum = 0
date = 0
avgList = []
gI = ["",9999999]
gd = ["", 0]


#continuation of my CSV opening
with open(budget_data) as BudgetData:
    budgetdata = csv.reader(BudgetData, delimiter = ',')
  
    ##Moving header to get to the next numerical value##
    header = next(budgetdata)
    
    #Pulling for number of rows and sum of profits##
    for x in budgetdata:
        date = date + 1 
        Sum = Sum + int(x[1])
        Average = int(x[1]) + int(x[:2]) / 2
        
        

print("Financial Analysis")
print("------------------")
print(Sum)
print(date)