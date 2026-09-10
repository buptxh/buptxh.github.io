const samplePages = [
  {
    group: "新生指南", slug: "/guide/welcome", title: "欢迎加入学生会", eyebrow: "从这里开始",
    lead: "这不是一本需要背诵的规章，而是一张帮助你快速找到人、找到事、找到节奏的校园地图。",
    sections: [
      ["first-week", "第一周先做什么", `<ul class="checklist"><li>加入本部门的工作群，并把群昵称改为“姓名｜部门”。</li><li>保存部长、带教同学和值班负责人的联系方式。</li><li>确认第一次例会、培训和值班的时间地点。</li><li>浏览组织架构与沟通规范，知道遇到问题该找谁。</li></ul>`],
      ["how-to-use", "如何使用这本手册", `<p>左侧目录按场景组织内容；右侧目录帮助你在长文章中快速跳转。按 <code>Ctrl K</code> 可以搜索关键词。</p><div class="callout"><strong>先问清楚，再开始做</strong>不确定任务标准、截止时间或交付格式时，尽早确认通常比返工更省时间。</div>`],
      ["mindset", "我们期待的工作方式", `<div class="cards"><div class="card"><h3>及时回应</h3><p>收到消息先确认，不能立刻完成也要说明预计时间。</p></div><div class="card"><h3>结果留痕</h3><p>文件、决定和进度放在团队约定的位置，方便协作。</p></div><div class="card"><h3>主动求助</h3><p>卡住超过合理时间就同步问题，不独自消耗。</p></div><div class="card"><h3>尊重边界</h3><p>学生工作重要，但学习、休息和个人状态同样重要。</p></div></div>`],
      ["continue", "接下来", `<p>先完成报到清单，再认识学生会的组织结构与日常协作方式。</p>`]
    ]
  },
  {
    group: "新生指南", slug: "/guide/checklist", title: "报到清单", eyebrow: "10 分钟完成",
    lead: "把基础信息准备好，你就能更从容地参与第一次部门活动。",
    sections: [
      ["accounts", "账号与群聊", `<ul class="checklist"><li>加入部门工作群、学生会通知群。</li><li>检查群公告与共享文件入口。</li><li>将常用群置顶，避免错过临时调整。</li></ul>`],
      ["calendar", "时间与日历", `<p>把例会、值班和培训加入日历，并预留往返时间。若与课程冲突，请提前联系负责人。</p>`],
      ["materials", "常用资料", `<p>建议建立一个“学生会”文件夹，按 <code>年份 / 活动 / 文件类型</code> 整理。命名时写清日期、主题和版本，例如：<code>2026-09-迎新晚会-流程-v2</code>。</p>`]
    ]
  },
  {
    group: "认识组织", slug: "/org/structure", title: "学生会是什么", eyebrow: "认识组织",
    lead: "学生会连接同学、学校与校园生活。理解分工不是为了记住头衔，而是为了知道如何协作。",
    sections: [
      ["mission", "我们的职责", `<p>倾听同学需求、协助校园服务、组织文化活动，并把信息准确传递给需要的人。</p>`],
      ["roles", "常见角色", `<div class="cards"><div class="card"><h3>主席团</h3><p>统筹方向、跨部门协调与重要决策。</p></div><div class="card"><h3>部长与负责人</h3><p>拆解任务、分配资源、确认交付标准。</p></div><div class="card"><h3>干事</h3><p>执行具体工作、反馈现场信息、提出改进建议。</p></div><div class="card"><h3>项目组</h3><p>围绕一次活动临时组成，结束后复盘归档。</p></div></div>`],
      ["collaboration", "跨部门协作", `<p>涉及多个部门时，先确认唯一对接人、关键节点和最终拍板人。重要变更不要只在私聊中口头约定。</p>`]
    ]
  },
  {
    group: "认识组织", slug: "/org/departments", title: "部门速览", eyebrow: "找到伙伴",
    lead: "不同学校的设置可能不同，请把下面的示例替换成你们的真实部门与职责。",
    sections: [
      ["service", "综合与权益", `<p><strong>办公室 / 秘书处：</strong>会议、物资、档案与综合协调。<br><strong>权益部：</strong>收集同学反馈，跟进校园服务问题。</p>`],
      ["content", "宣传与内容", `<p><strong>宣传部：</strong>视觉设计、摄影与校园传播。<br><strong>新媒体部：</strong>选题、文案、排版与账号运营。</p>`],
      ["events", "活动与实践", `<p><strong>文体部：</strong>文艺、体育活动的策划与执行。<br><strong>实践部：</strong>志愿服务、社会实践与外联协作。</p>`]
    ]
  },
  {
    group: "工作方法", slug: "/work/meetings", title: "开一次有效的会", eyebrow: "日常协作",
    lead: "会议的价值是减少不确定性。能在群里说清楚的事，不必为了形式开会。",
    sections: [
      ["before", "会前", `<ul><li>提前发议题、背景材料和希望得到的结论。</li><li>明确主持人、记录人和预计结束时间。</li></ul>`],
      ["during", "会中", `<p>围绕议题讨论；偏题内容进入“待跟进”列表。每项决定都要落到负责人和时间点。</p>`],
      ["after", "会后", `<p>在约定位置发布纪要，包含 <strong>结论、负责人、截止时间、待确认事项</strong>。有异议应尽快提出。</p>`]
    ]
  },
  {
    group: "工作方法", slug: "/work/events", title: "把活动办明白", eyebrow: "项目指南",
    lead: "一场活动可以拆成目标、方案、执行和复盘四段。先把成功标准说清楚，再讨论创意。",
    sections: [
      ["goal", "1. 定义目标", `<p>回答三个问题：为谁办、解决什么问题、怎样算成功。指标可以是参与人数、满意度或信息触达率。</p>`],
      ["plan", "2. 制定方案", `<p>列出时间线、场地、预算、物资、宣传、人员分工和风险预案。关键节点至少提前一次检查。</p>`],
      ["delivery", "3. 现场执行", `<p>设置总负责人和各区域负责人；建立简短、明确的现场沟通频道；保留签到、照片和突发情况记录。</p>`],
      ["review", "4. 复盘归档", `<p>活动结束后记录：哪些有效、哪里偏差、下次怎么改。把可复用模板与最终文件一并归档。</p>`]
    ]
  },
  {
    group: "规范与支持", slug: "/rules/communication", title: "沟通与请假", eyebrow: "团队规范",
    lead: "清晰、及时、有边界，是团队沟通最重要的三件事。",
    sections: [
      ["messages", "发消息时", `<p>先给结论，再补背景；需要对方行动时，明确写出事项与截止时间。不要只发送“在吗”。</p>`],
      ["leave", "请假与冲突", `<p>无法参加例会、值班或活动时，尽早说明原因和受影响的任务；如有必要，主动协调替班或交接。</p>`],
      ["urgent", "遇到紧急情况", `<div class="callout"><strong>人身安全优先</strong>发生受伤、冲突、设备故障或其他现场风险时，立即停止相关活动，联系老师与现场负责人。</div>`]
    ]
  },
  {
    group: "规范与支持", slug: "/reference/contacts", title: "常用信息", eyebrow: "随手可查",
    lead: "请在正式发布前，将示例内容替换为本校的真实信息。",
    sections: [
      ["contacts", "联系谁", `<ul><li><strong>部门负责人：</strong>日常任务、请假、工作反馈</li><li><strong>主席团对接人：</strong>跨部门协调、重大调整</li><li><strong>指导老师：</strong>安全、制度、审批与紧急情况</li></ul>`],
      ["places", "常用地点", `<p>学生会办公室：待补充<br>物资存放点：待补充<br>打印与报销地点：待补充</p>`],
      ["links", "常用入口", `<p>共享资料库：待补充<br>活动申请表：待补充<br>场地预约：待补充</p>`]
    ]
  }
];

const pages = window.HANDBOOK_PAGES || samplePages;

const groups = [...new Set(pages.map(page => page.group))];
const $ = selector => document.querySelector(selector);
const escapeHtml = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
const expandedGroups = new Set();
const groupIconPaths = [
  '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M9.5 20v-6h5v6"/>',
  '<path d="m2 10 10-5 10 5-10 5Z"/><path d="M6 12.5V17c3 2 9 2 12 0v-4.5"/><path d="M22 10v6"/>',
  '<path d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/><path d="M8 7h8M8 10.5h6"/>',
  '<path d="M3 10h18"/><path d="m5 10 7-6 7 6"/><path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9M3 19h18M2 22h20"/>',
  '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="M14.5 14a4 4 0 0 1 6 3.5V20"/>',
  '<path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/>',
  '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  '<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
  '<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/>'
];

function groupIcon(index) {
  const paths = groupIconPaths[index] || groupIconPaths[groupIconPaths.length - 1];
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

function currentPage() {
  const slug = location.hash.replace(/^#/, '').split('#')[0] || '/guide/welcome';
  return pages.find(page => page.slug === slug) || pages[0];
}

function renderSidebar(active) {
  expandedGroups.add(active.group);
  $('#sidebar-nav').innerHTML = groups.map((group, index) => {
    const expanded = expandedGroups.has(group);
    const activeGroup = group === active.group;
    return `
    <section class="nav-group${expanded ? '' : ' collapsed'}${activeGroup ? ' active-group' : ''}">
      <button class="nav-group-toggle" type="button" data-group-index="${index}" aria-expanded="${expanded}" aria-controls="nav-group-${index}">
        <span class="nav-group-icon">${groupIcon(index)}</span>
        <span class="nav-group-label">${escapeHtml(group)}</span>
        <svg class="nav-group-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 6 6-6 6"/></svg>
      </button>
      <div class="nav-group-pages" id="nav-group-${index}" aria-hidden="${!expanded}"${expanded ? '' : ' inert'}>
        <div class="nav-group-pages-inner">
          ${pages.filter(page => page.group === group).map(page => `<a href="#${page.slug}" class="${page.slug === active.slug ? 'active' : ''}">${escapeHtml(page.title)}</a>`).join('')}
        </div>
      </div>
    </section>`;
  }).join('');
}

function renderPage() {
  const coverMode = !location.hash || location.hash === '#/' || location.hash === '#/cover';
  document.body.classList.toggle('cover-mode', coverMode);
  if (coverMode) {
    document.title = '学生会新生手册';
    setSidebar(false);
    return;
  }
  const page = currentPage();
  const visibleOutlineSections = page.sections.filter(([id, title]) => !(id === 'overview' && title.trim() === '概览'));
  document.title = `${page.title} | 学生会新生手册`;
  $('#article').innerHTML = `
    <h1>${page.title}</h1>
    ${page.sections.map(([id, title, html]) => id === 'overview' && title.trim() === '概览'
      ? `<section id="${id}">${html}</section>`
      : `<section><h2 id="${id}">${title}</h2>${html}</section>`).join('')}`;
  renderSidebar(page);
  $('#outline-nav').innerHTML = visibleOutlineSections.map(([id, title]) => `<a href="#${page.slug}#${id}">${title}</a>`).join('');
  const index = pages.indexOf(page);
  $('#pager').innerHTML = `
    ${index > 0 ? `<a href="#${pages[index - 1].slug}"><small>上一篇</small><span>← ${pages[index - 1].title}</span></a>` : '<span></span>'}
    ${index < pages.length - 1 ? `<a href="#${pages[index + 1].slug}"><small>下一篇</small><span>${pages[index + 1].title} →</span></a>` : ''}`;
  $('.sidebar').classList.remove('open');
  $('#scrim').classList.remove('open');
  const sectionId = location.hash.split('#')[2];
  requestAnimationFrame(() => sectionId ? document.getElementById(sectionId)?.scrollIntoView() : scrollTo({ top: 0 }));
}

function openSearch() {
  const dialog = $('#search-dialog');
  if (!dialog.open) dialog.showModal();
  $('#search-input').value = '';
  renderSearch('');
  setTimeout(() => $('#search-input').focus(), 20);
}

function renderSearch(query) {
  const term = query.trim().toLowerCase();
  const results = pages.filter(page => !term || `${page.title} ${page.search || page.lead || ''} ${page.sections.map(s => s[1]).join(' ')}`.toLowerCase().includes(term));
  $('#search-results').innerHTML = results.length ? results.map(page => `<a class="search-result" href="#${page.slug}"><strong>${escapeHtml(page.title)}</strong><span>${escapeHtml(page.group)}</span></a>`).join('') : '<div class="empty">没有找到相关内容</div>';
}

$('#search-trigger').addEventListener('click', openSearch);
$('#search-input').addEventListener('input', event => renderSearch(event.target.value));
$('#search-results').addEventListener('click', () => $('#search-dialog').close());
$('#sidebar-nav').addEventListener('click', event => {
  const toggle = event.target.closest('.nav-group-toggle');
  if (!toggle) return;
  const group = groups[Number(toggle.dataset.groupIndex)];
  const navGroup = toggle.closest('.nav-group');
  const collapsed = navGroup.classList.toggle('collapsed');
  const navPages = navGroup.querySelector('.nav-group-pages');
  toggle.setAttribute('aria-expanded', String(!collapsed));
  navPages.setAttribute('aria-hidden', String(collapsed));
  navPages.inert = collapsed;
  if (collapsed) expandedGroups.delete(group);
  else expandedGroups.add(group);
});
$('#theme-toggle').addEventListener('click', () => {
  const light = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = light ? 'dark' : 'light';
  localStorage.setItem('handbook-theme', light ? 'dark' : 'light');
});
$('#menu-toggle').addEventListener('click', () => { $('#sidebar').classList.toggle('open'); $('#scrim').classList.toggle('open'); });
$('#scrim').addEventListener('click', () => { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('open'); });
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
});
window.addEventListener('hashchange', renderPage);
document.documentElement.dataset.theme = localStorage.getItem('handbook-theme') || 'light';
renderPage();
