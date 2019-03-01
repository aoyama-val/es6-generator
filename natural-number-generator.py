def generate_natural_numbers():
    n = 1
    while True:
        yield n
        n += 1

for i in generate_natural_numbers():
    print(i)
