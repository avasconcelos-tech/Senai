from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(15, Pin.OUT))
led.freq(1000)
botao = Pin(16, Pin.IN) 

ultimo_estado_botao = 0

led.duty_u16(0)

while True:
    estado_atual_botao = botao.value()
    
    if estado_atual_botao1 == 1 and ultimo_estado_botao1 == 0:
        ligado = not ligado 

        
        if ligado:
            led.duty_u16(65535)
            sleep(1.5)
            led.duty_u16(63000)
            sleep(1.5)
            led.duty_u16(33000)
            sleep(1.5)
            led.duty_u16(15000)
            sleep(1.5)
            led.duty_u16(8000)
            sleep(1.5)
            led.duty_u16(1000)
            sleep(1.5)
            led.duty_u16(100)
            sleep(1.5)
            led.duty_u16(0)
            sleep(1.5)
        else:
            for i in range(65535, -1, -1000):
                if i < 0: i = 0
                led.duty_u16(i)
                sleep(0.01)

ultimo_estado_botao = estado_atual_botao
sleep(0.05)
        