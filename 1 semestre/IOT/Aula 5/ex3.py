from machine import Pin
from utime import sleep
from dht import DHT22

botao = Pin(16, Pin.IN)
sensor_temp = DHT22(Pin(14))

while True:
    leitura_botao = botao.value() 
    
    sensor_temp.measure()
    
    umidade = sensor_temp.humidity()
    
    temperatura = sensor_temp.temperature()

    if leitura_botao == 1:
        print("A temperatura é: ", temperatura)
        print(leitura_botao)
    if leitura_botao == 2:
        print("A umidade é: ", umidade)
        print(leitura_botao)
    else:
        print("O botão NÃO foi pressionado! (Estado: LOW)")
        print(leitura_botao)
    
    sleep(2)