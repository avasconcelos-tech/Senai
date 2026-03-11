from machine import Pin
from utime import sleep

botao_up = Pin(14, Pin.IN)

while True:
    leitura_botao = botao_up.value() #guardando informção na variável leitura_botao
    
    if leitura_botao == 0:
        print("O botão FOI pressionado!(Estado: LOW)")
        print(leitura_botao)
    else:
        print("O botão NÃO foi pressionado! (Estado: HIGH)")
        print(leitura_botao)
    
    sleep(0.5)
    