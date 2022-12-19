# Instructiuni de utilizare
1. Generati imaginea de docker utilizand `docker build -t biiancaiorga/hanoi -f Dockerfile .` sau `docker pull biiancaiorga/hanoi`
2. Rulati container-ul de docker `docker run --name <nume_container> -p 80:80 biiancaiorga/hanoi`
3. Intrati pe browser si folositi link-ul http://localhost:80
4. Introduceti numarul de discuri si apasati butonul **Ruleaza** pentru a rula programul sau **Reseteaza** pentru a reseta pagina
