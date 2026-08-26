/* ── RENDER: gera os cards de serviços e cases a partir de js/data.js ── */

function criarListaItens(itens) {
  return itens.map(function(item) { return '<li>' + item + '</li>'; }).join('');
}

function criarServicoCard(servico) {
  var card = document.createElement('div');
  card.className = 'servico-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-expanded', 'false');

  var inner;
  var innerStyle = '';

  if (servico.planos) {
    innerStyle = ' style="grid-template-columns:1fr;gap:1rem;"';
    var planosHtml = servico.planos.map(function(plano) {
      var estilo = plano.destaque ? ' style="border-left:2px solid var(--bordo);"' : '';
      return '<div class="plano-item"' + estilo + '>'
        + '<div class="plano-nome">' + plano.nome + '</div>'
        + '<ul class="plano-lista">' + criarListaItens(plano.itens) + '</ul>'
        + '</div>';
    }).join('');
    inner = '<div class="planos-grid">' + planosHtml + '</div>'
      + '<a href="' + linkWhatsApp(servico.ctaMsg) + '" target="_blank" rel="noopener noreferrer" class="servico-cta" style="margin-top:0.5rem;">' + servico.ctaTexto + '</a>';
  } else {
    var colunasHtml = servico.colunas.map(function(col) {
      var listaClass = col.beneficios ? 'servico-detalhe-lista servico-beneficios-lista' : 'servico-detalhe-lista';
      var extraHtml = '';
      if (col.extra) {
        var extraListaClass = col.extra.beneficios ? 'servico-detalhe-lista servico-beneficios-lista' : 'servico-detalhe-lista';
        extraHtml = '<div class="servico-detalhe-titulo" style="margin-top:1rem;">' + col.extra.titulo + '</div>'
          + '<ul class="' + extraListaClass + '">' + criarListaItens(col.extra.itens) + '</ul>';
      }
      return '<div class="servico-detalhe-col">'
        + '<div class="servico-detalhe-titulo">' + col.titulo + '</div>'
        + '<ul class="' + listaClass + '">' + criarListaItens(col.itens) + '</ul>'
        + extraHtml
        + '</div>';
    }).join('');
    inner = colunasHtml
      + '<a href="' + linkWhatsApp(servico.ctaMsg) + '" target="_blank" rel="noopener noreferrer" class="servico-cta">' + servico.ctaTexto + '</a>';
  }

  card.innerHTML =
    '<div class="servico-header">'
      + '<div class="servico-header-left">'
        + '<div class="servico-num" aria-hidden="true">' + servico.numero + '</div>'
        + '<div class="servico-nome">' + servico.nome + '</div>'
      + '</div>'
      + '<div class="servico-desc-curta">' + servico.descCurta + '</div>'
      + '<span class="servico-seta" aria-hidden="true">+</span>'
    + '</div>'
    + '<div class="servico-detalhe">'
      + '<div class="servico-detalhe-inner"' + innerStyle + '>' + inner + '</div>'
    + '</div>';

  return card;
}

/*
function criarCaseCard(item) {
  var card = document.createElement('div');
  card.className = 'case-card reveal';

  var badge = item.emAndamento ? '<div class="case-em-andamento">Em andamento</div>' : '';
  var resultadosHtml = item.resultados.map(function(r) {
    return '<div class="case-resultado">' + r + '</div>';
  }).join('');

  card.innerHTML = badge
    + '<div class="case-nicho">' + item.nicho + '</div>'
    + '<div class="case-titulo">' + item.titulo + '</div>'
    + '<div class="case-problema">' + item.problema + '</div>'
    + '<div class="case-resultados">' + resultadosHtml + '</div>'
    + '<div class="case-stack">' + item.stack + '</div>';

  return card;
}
*/

function criarProdutoCard(produto, destaque) {
  var card = document.createElement('article');
  card.className = 'produto-card' + (destaque ? ' produto-card-destaque' : '');
  card.innerHTML = (produto.subtitulo ? '<div class="produto-subtitulo">' + produto.subtitulo + '</div>' : '')
    + '<h3 class="produto-nome">' + produto.nome + '</h3>'
    + '<p class="produto-descricao">' + produto.descricao + '</p>'
    + '<div class="produto-meta">'
      + '<div class="produto-preco">' + produto.preco + '</div>'
      + '<div class="produto-entrega">Entrega: ' + produto.entrega + '</div>'
    + '</div>'
    + '<a class="produto-cta" href="#" data-produto="' + produto.produto + '">Obter</a>';
  return card;
}

function renderizarProdutos(tipo) {
  var produtosLista = document.getElementById('produtos-lista');
  if (!produtosLista) return;
  produtosLista.innerHTML = '';
  PRODUTOS
    .filter(function(produto) { return tipo === 'consultoria' ? produto.destaque : true; })
    .forEach(function(produto) {
      produtosLista.appendChild(criarProdutoCard(produto, tipo === 'consultoria' || produto.destaque));
    });
}

(function() {
  var servicosGrid = document.getElementById('servicos-grid');
  if (servicosGrid) {
    SERVICOS.forEach(function(servico) {
      servicosGrid.appendChild(criarServicoCard(servico));
    });
  }

  /*
  var casesGrid = document.getElementById('cases-grid');
  if (casesGrid) {
    CASES.forEach(function(item) {
      casesGrid.appendChild(criarCaseCard(item));
    });
  }
  */

  var produtosTabs = document.querySelectorAll('[data-produtos-tab]');
  if (produtosTabs.length) {
    renderizarProdutos('produtos');
    produtosTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        produtosTabs.forEach(function(item) {
          item.classList.remove('ativo');
          item.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('ativo');
        tab.setAttribute('aria-selected', 'true');
        renderizarProdutos(tab.getAttribute('data-produtos-tab'));
      });
    });
  }

  /* ── Links de WhatsApp fora dos cards (nav, hero, diagnóstico, sobre, cta, footer) ── */
  document.querySelectorAll('[data-wa]').forEach(function(el) {
    var chave = el.getAttribute('data-wa');
    var mensagem = chave ? CONTATO.msg[chave] : undefined;
    el.href = linkWhatsApp(mensagem);
  });
})();
