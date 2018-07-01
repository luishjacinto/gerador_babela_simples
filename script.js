        document.querySelector("#enviar").addEventListener("click", gerarTabela);
        document.querySelector("#excluir").addEventListener("click", excluirTabela);

        var linha;
        function gerarTabela(){
            if(document.querySelector("#nomeTabela").value != "" && document.querySelector("#nomeDado").value != "" && document.querySelector("#dados").value != ""){
                //pegar dados dos inputs
                document.querySelector("#nometable").innerHTML = document.querySelector("#nomeTabela").value
                document.querySelector("#nome").innerHTML = document.querySelector("#nomeDado").value

                dados = document.querySelector("#dados").value.split(" ; ");
                //organizar dados
                dados.sort(function(a, b){return a-b});

                if(dados.indexOf("QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm") != -1){
                    for(c = 0; c < dados.length; c++){ dados[c] = parseFloat(dados[c]); }
                }

                linhas = [];
                for(c = 0; c < dados.length; c++){
                    if(linhas.indexOf(dados[c]) == -1) linhas.push(dados[c]);
                }
                var frequencias = [];
                for(c = 0; c < linhas.length; c++){
                    var freq = 0;
                    for(c1 = 0; c1 < dados.length; c1++){
                        if(dados[c1] == linhas[c]) freq++;
                    }
                    frequencias[c] = freq;
                }
                
                //criar tabela
                var tabela = document.querySelector('#tabela');

                for(c = 0; c < linhas.length; c++){
                    var tr = document.createElement('tr');
                    var linha = document.createElement('td');
                    var fi = document.createElement('td');
                    var fai = document.createElement('td');
                    var fr = document.createElement('td');
                    var fri = document.createElement('td');

                    linha.textContent = linhas[c];
                    fi.textContent = frequencias[c];
                    var faiValor = 0;
                    for(c1 = 0; c1 <= c; c1++){
                        faiValor += frequencias[c1];
                    }
                    fai.textContent = faiValor;

                    fr.textContent = (frequencias[c]/dados.length)*100 + "%";

                    var friValor = 0;
                    for(c1 = 0; c1 <= c; c1++){
                        friValor += (frequencias[c1]/dados.length)*100;
                    }
                    fri.textContent = friValor + "%";

                    tr.appendChild(linha);
                    tr.appendChild(fi);
                    tr.appendChild(fai);
                    tr.appendChild(fr);
                    tr.appendChild(fri);
                    
                    tabela.appendChild(tr);
                }
                var tr = document.createElement('tr');
                var linha = document.createElement('td');
                var fi = document.createElement('td');
                var fai = document.createElement('td');
                var fr = document.createElement('td');
                var fri = document.createElement('td');

                linha.textContent = "Total";
                fi.textContent = dados.length;
                fai.textContent = "-";
                fr.textContent = "-";
                fri.textContent = "100%";

                tr.appendChild(linha);
                tr.appendChild(fi);
                tr.appendChild(fai);
                tr.appendChild(fr);
                tr.appendChild(fri);
                    
                tabela.appendChild(tr);
                document.querySelector("#enviar").disabled = true;
                document.querySelector("#excluir").disabled = false;
                document.querySelector('#TABELA').style.display = "inline";
            }
        }
        function excluirTabela(){
            var elementos = document.querySelector('#tabela').childNodes;
            var tamanho = elementos.length;
            for(x = 2; x < tamanho; x++){
                document.querySelector('#tabela').removeChild(document.querySelector("#tabela").lastChild);
            }
            document.querySelector("#enviar").disabled = false;
            document.querySelector("#excluir").disabled = true;
            document.querySelector('#TABELA').style.display = "none";
            document.querySelector('#nometable').innerHTML = "";
        }
        console.log("Caso de teste");
        console.log("Alturas dos alunos da turma");
        console.log("Alturas");
        console.log("1.82 ; 1.77 ; 1.79 ; 1.74 ; 1.73 ; 1.81 ; 1.82 ; 1.69 ; 1.71 ; 1.78 ; 1.78 ; 1.88 ; 1.72 ; 1.65 ; 1.75 ; 1.78 ; 1.73 ; 1.82 ; 1.84 ; 1.74 ; 1.76 ; 1.79 ; 1.83 ; 1.76 ; 1.70");
