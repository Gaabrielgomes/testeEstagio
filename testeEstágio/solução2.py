palavra = str(input('Palavra: '))
contador = 0

for i in palavra:
    if i in 'aA':
        contador += 1

if contador == 0:
    print('A palavra escolhida não possui a letra A')
    exit()

print(f'A palavra esolhida possui {contador} letra(s) A')