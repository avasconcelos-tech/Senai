from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(15, Pin.OUT))
led.freq(1000)
botao1 = Pin(16, Pin.IN) 
botao2 = Pin(17, Pin.IN)

ultimo_estado_botao_ma = 0
ultimo_estado_botao_me = 0

led.duty_u16(0)

valor_10 = 6553
luz = 0

while True:
    estado_atual_botao1 = botao1.value()
    estado_atual_botao2 = botao2.value()
    
    if estado_atual_botao1 == 1 and ultimo_estado_botao1 == 0:
        luz+=1
        if luz >10:
            luz = 0
        print (luz)
        sleep (0.2)

        
    if estado_atual_botao2 == 1 and ultimo_estado_botao2 == 0:
        luz-=1
        if luz <10:
            luz = 10
        print (luz)
        sleep (0.2)
        
    
    led.duty_u16(luz*valor_10)
    
    
    ultimo_estado_botao1 = estado_atual_botao1
    ultimo_estado_botao2 = estado_atual_botao2

    sleep(0.01)
    
 