birds = [1, 2, 3, 4, 5, 4, 4, 2, 1, 3, 4]

def migratoryBirds(arr):
  count_birds = dict()
  for type in arr:
    if type not in count_birds:
      count_birds[type] = 1
    else:
      count_birds[type] += 1
    
  return max(count_birds, key=count_birds.get)

print(migratoryBirds(birds))