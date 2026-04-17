from machine import Pin
from utime import sleep
from dht import DHT22

sensor_temp = DHT22(Pin(14))

led = Pin(15, Pin.OUT)    

while True:
    led.toggle()
    sleep(1)
   
    sensor_temp.measure()
    umidade = sensor_temp.humidity()
    
    temperatura = sensor_temp.temperature()
    
    print("A umidade é: ", umidade)
    print("A temperatura é: ", temperatura)
    
    sleep(2)
