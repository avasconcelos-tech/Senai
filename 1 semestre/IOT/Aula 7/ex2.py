from machine import Pin
from utime import sleep

sensor_presenca = Pin(15, Pin.IN)
led_blue = Pin(16, Pin.IN)

led_blue_on = False
while True:
    leitura_sensor = sensor_presenca.value()
    
    if(leitura_sensor == 1):
        led_blue_on = True
        print("Presença detectada")
    else:
        print("Nada detectado")
    sleep(0.5)
    