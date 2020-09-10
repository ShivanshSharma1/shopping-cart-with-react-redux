const itemsToUse = 
    [
        {
            id: 0,
            name: "Shirt",
            price: "20$",
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4cXilLqWd8tskKFoG040zVnSymkScPPq_OQ&usqp=CAU',
            inCart: false,
            description: "Maroon and Navy Blue checked casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket"
        },
        {
            id: 1,
            name: "Console",
            price: "20$",
            src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUSEBASERIQFhIQDxYQFRgQEhEQFRUWFhUSExUYHSggGBolGxUVITEhJTUrLi4uFx8zODcsNygtLisBCgoKDQ0OFw8PFSsdFh0tKysrKystLSsrLS0tMS03Ky0tLS0rLS0tLS03KysuLTctKystNzc3LSs3LisrNy0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQIDAwoDBQYFBQAAAAAAAQIDEQQSIQUTMQYHIjJBUWFxgZEjocEUQmJykjNDsdHh8SRSgqLwFTRjg8L/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQEBAQADAQAAAAAAAAAAAAAAEQESIVEC/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBsCIAAAAAAAAAAAAAAAAAAAAAAAAAAAGN2jt/C4f8AbYmjTfdKazekeLAyQNIx/Ofgaf7NVa7/AAQyR9XUafsma5j+datL9hh6VNd9Ruq/ZZUvmWFdaLfF42lRV6tSFNd9SSgvmzhWO5bY6tfPippPsp2opfoSfuzCVMW5O8m23xbd2/NssSu447l7gaXCq6r7qMXL/c7R+Zr2N50eyhhvKVaf/wARX1OWOv4kN8WYVumO5eY2r++VJPsoxUfm7y+Zg8RtKdR3qVJ1H31JOb+bMPvSG9L0lbbszlli8PpCs5RX3a3xY+SvqvRo27ZXOfTlpiaMqf4qT3kfNxdmvS5yTekVWJMK9F7L25hsUvgV6dR8XFO015wfSXqjInmVV7O6dmtU1o0+9PsNi2Ty8x2HslX3sV92ut4v1aS+ZOK13gHO9k86tCVliqM6L7ZU/i0/NrSS9Ezddlbaw+KV8PXp1e9QknJfmjxXqZir8AAAAAAAAAAAAAAAA13l9t//AKfgK2IjbeJKnQurrfVHlg2u1JvM/CLNiOOc8fLGtTxMcHh6rpxjSz4nLa9R1H0Y3etlGN9OOfwGDRMVyyxWJ0r4qtLvWZxh6042XyLSFZW0tbwMDN1IO9lOPctGl3IqUMZFvR5X3PR/1NJGa3pLvSzVVkc5SLreh1S03hDOCLvekd4WWcbwEZbB4ujFPfUKtZvqZKsaUY/nTg2/NNeRPiK9BpunCtGTtljKpCcYd+aSppy8OHnprhlUI7wEXu9IOsWTqkrqgi+3w3xj1VJZ1u7i+HmCMmq5NDEuLUotxlHWLi3GSfemtUY9b7IqjqTtD4Skm1lT4xTzZkunbTTpPxJcS7U1KM3mj11xvdqK1fncI3zY/ORj8NZOqsRBfdxCzu3hNNSv5tm97E52sLVcYYilUw85NRTj8em5N2SWVZ73/Cee1jZdt36pfQjR2pOlONSm3CcGpwlo3GcXdSV1xTsxM9K9jtksKsZdWSduNnex5kq8stoV8KoVcdWmp9ZXUOinpeUUm+HfqUdn7QxOAq0sRh66zSkq0optRq260auvSUlOSu+99upmG/UepAWOw9qQxeGpYilfJWhGaT4xvxjLxTun4oviNAAAAAAAAKGPxSo0p1ZKTjShKpJRTlJqKbailq3pwPK/KDbmJx8nUr1pTblKcFJ56dJSd8lNcIpcLruPV5qnKfm+wOPvKdPc1n+9oWhNvvmrZZ+quXNg8xb+UOvHTvWq9/7lVxp1e679/ftN/wCU3NjjcJeVOP2uirvNRXxIr8dLj+nN6GhVtnxbduhLg7cLrscfoaqKf2epT6ks8f8ALL6f0J6ePje004S8eHv2epT3lWl1lmj3rX+xXhiKdVWlbyl9H2CC4yJ8PddpJOnJePkUHs+UNaM2vwvg/oRjj5Qdq0HHxjqvb+VyCOchmLluM1dWku+PH/nmUp4bTMpaeKswKWYZhlKVTEQjxkvTV/ICq5lKdZFtPEN9WD85aIpZZPjK35f5gXM69u5EuEr9NN9JarW6V7p2v6MtZZFx1fuZnZdOP2eUml8SVl4KOgF3KtHK55IKCko7nM7OVl8W3C+q0tbS/Es6zvGVko5rO2rSWfNxt2cPQs8VOS0U2l9fMz8drUVFZbJOzjaLk15WVk0rLW3VKMFUwckrtwS4daT/AIREtnzy5r07cetL+GUrVcTRVZZk8mjnGLUZWu3kjJppaZVez4FbZWPpxcm9WnFrt0tNfJuMv9JBdbMrwowcZ0lUbjbpaZXrwzRvZ34qz6KKuHw7oOE6tNTjUi8t8rvouk001fz732oo7Rx1OdN8E7PI4pw6Tta10m+9vwLDDTc0lOcpJaJN6JdyXYtF7FK7xzF7W32DrUeH2evOVNJ3UaNbpxS71m3iXkdLOHczON3e0ZU1pHE4eS/9lGSlH/bOodxM6oACAAAAAAAAAa7yk5FYLH3daio1Xwq0vh1fC7XWXhK6NiAHCOUfNbi8NeeH/wAXTWvQWWtFeNP73+l38DnuL2bFtpxdOcXaWjjKL7pRfB+zPXJhOUPJXCY9f4iinJaRqR6FWPlNateDuvAtHlbJWo8OnH3svLsK1HalOfRqLLf/ADaxfr/M6lyj5q8TQvPCSWJprXK7Qrr06s/Sz8DnOO2aszhVpyhUjpJSThOL/FF/UqLWezE3mpScH2NO6fr/AHKVff8AUk4aa3tq7+WnyEMFVou9J5o8WuCt5P8AiUq0a1STbkoJ3emrAp1MOv3tVvwbyr2KSxFOOkI3fgvq9S6wmyN5PLCNStN/dinOX6Y6m67G5r9oVrfAjhoPtrPK7d+SN372A57OdSX3VFePEkWHu9ZNt6JLt8F3nd9l8zVCNniq9Ss+2NP4MPddL5m57J5JYTCf9vhqdN9slG835yerJVeedjchsbibbrCTjF8J1luo+fS6XsmY6LcKag+MXJPzu7nqxYY4Ry45C4qhiakqWHnXo1ZyqUpUlmcVJ3yTS1TTdu5qz8EzU1qvJTZH27H0aDV4SmpVvClHpTv6Jr1PQmM5M4CvJSq4HDycUkugo9GKtFNRtdJaa30NF5tuS9TB5606bVaqlBJ3e7p3u1+ZtK/kvE6HRjVfGI0zF/RjCMVCMIRjFJRjGKUYpcEklZIkx2Do4im6VejTq03a8KkFKOnB2fB+JJToT7UXUKDIrAY3kdgpYSvhqOFo0t/TlBSUU5Kdr05Znd9GVmeb6cHTnKElaUJOEk+KlF2afqj1kqByHnL5vqzxMsZhKMq0KzzV4U9Z06tulNR4yjLjpdpt9hcTWv8ANpXa2vgtfv1k/J4eqejqVS5w/m05M1qeKjia1KVNUVPdRnFqcqk4uDk12JRlLj2tdx2bZzk73VtBqr4AEAAAAAAAAAAAAAAMVtzk7hsbHLiaMZ20jLq1IflmtUZUAcox/M83NqhjMtKTV97DPUiu5OLSl56epmNj802Ao2dbeYmX/lllh+iFk153N/BaLTAbMo4eOWhRp0orspxUF8i5ykwIJciGREwAlyIg6aJwBS3CI7pFQASbtEciJgBLkQyImAEm7JlGxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z',
            inCart: false,
            description: "4K clarity, graphics become sharper and more realistic, skin tones become warmer and more lifelike, while textures and environments burst into life like never before"
        },
        {
            id: 2,
            name: "Mouse",
            price: "20$",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJno4eWgv7ZKFsO9OqGWXAUSj_kPbiP6gDTA&usqp=CAU",
            inCart: false,
            description: "This mouse from Lenovo is a smart choice to buy when it comes to being functional. This mouse features a high-density rechargeable battery that lasts up to a whole month with daily usage. It also has a sleek design and it’s compatible with Windows 10 Home, Windows 8.1 and Windows 7."
        },
        {
            id: 3,
            name: "Keyboard",
            price: "20$",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK7-ZfGqvjytF79LsTOc0MFzoI3-3MeLR8xw&usqp=CAU",
            inCart: false,
            description: "Zebronic Km2100 Multimedia Usb Keyboard. 1Year Carry-in Warranty to service.ZEB-KM2100 is a modular designed multimedia USB keyboard with 114 keys which includes 12 multimedia shortcut keys. The keys are UV coated and this keyboard is easy to install with plug and play device."
        },
        {
            id: 4,
            name: "Cap",
            price: "20$",
            src:"data:image/jpeg;base64,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",
            inCart: false,
            description: "Free Fit features a pre-curved visor and unstructured front panels that conform to your head for a sleek, low profile fit"
        },
        {
            id: 5,
            name: "Watch",
            price: "20$",
            src:"data:image/jpeg;base64,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",
            inCart: false,
            description: "Classic design with modern technology, this Fossil touchscreen smartwatch features a brown leather strap, and let's you track your heart rate, receive notifications, customize your dial and more. Smartwatches powered with Wear OS by Google are compatible with iPhone and Android phones."
        },
    ]
export default itemsToUse