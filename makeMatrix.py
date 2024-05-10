
import json
import random

rand = random.Random(33)

N = 20
mat = []
for i in range(N * N):
    mat.append(rand.randint(0, 500))
print(json.dumps(mat))
