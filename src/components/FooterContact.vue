<template>
    <div class="footer-top"><img src="../assets/footer_bg_top.png" />
    </div>
    <div class="footer-bg"><img src="../assets/footer_bg_bottom.png" />
        <footer id="contact" class="container">
            <h2>Contact</h2>
            <div class="footer">
                <div class="form-bg">
                    <form name="contact" method="POST" netlify>
                        <input type="text" name="name" placeholder="Naam" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Bericht" rows="8" required></textarea>
                        <button type="submit">Verstuur</button>
                    </form>
                </div>
                <img src="../assets/jbosch_logo_hoog.svg" alt="">
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    position: relative;
    height: 100%;
}

.footer-top,
.footer-bg {
    position: relative;
    overflow: hidden;
}

.footer-top {
    margin-top: -300px;
    height: 693px;
    z-index: -1;
}

.footer-bg {
    height: 1088px;
}

.footer-top img[src$=".png"],
.footer-bg img[src$=".png"] {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
}

h2 {
    font-size: 2.5rem;
    letter-spacing: .4rem;
    padding-bottom: 4rem;
    text-align: center;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 85%;

    img {
        width: 10rem;
    }
}

.form-bg {
    background-color: rgba(1, 139, 226, 0.6);
    border-radius: 1rem;
    padding: 1rem;
    width: 90%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            height: 3rem;
            border-radius: .5rem;
            outline: none;
            border: none;
            padding: 1rem;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            color: #003b60;

            &:focus {
                outline: 2px solid #017fce;
                box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
            }
        }

        textarea {
            padding: 1rem;
            border-radius: .5rem;
            border: none;
            outline: none;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            color: #003b60;

            &:focus {
                outline: 2px solid #017fce;
                box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
            }
        }

        button {
            border: none;
            outline: none;
            background-color: #017fce;
            color: #FFF;
            padding: .5rem;
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            border-radius: .5rem;

            &:hover {
                background-color: #003b60;
                ;
                cursor: pointer;
            }
        }
    }
}
</style>