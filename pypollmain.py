#import dependencies
import os
import csv

#Import the CSV file
election_data = os.path.join('Resources', 'election_data.csv')

#creating my sum variable
Sum = 0

#continuation of my CSV opening
with open(election_data) as ElectionData:
    electiondata = csv.reader(ElectionData, delimiter = ',')
  
    #Moving header to get to the next numerical value
    header = next(electiondata)
