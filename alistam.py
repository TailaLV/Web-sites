nome = input('Escreva seu nome: ')
idade = int(input('Escreva sua idade: '))
peso = float(input('Escreva seu peso: '))
altura = float(input('Escreva sua altura: '))

if idade >= 18 and peso >= 60 and altura >= 1.70:
    print('Você passou!')
else: 
    print('você não passou')

print(nome, idade, peso, altura)
print(type(nome), type(idade), type(peso), type(altura))
