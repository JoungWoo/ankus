Ext.data.JsonP.command_compiler({"title": "Sencha Compiler Reference", "guide": "<h1>Sencha Compiler Reference</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/command_compiler-section-1'>Sets And The Current Set</a></li>\n<li><a href='#!/guide/command_compiler-section-2'>Generating Output with concat</a></li>\n<li><a href='#!/guide/command_compiler-section-3'>Saving And Restoring Sets</a></li>\n<li><a href='#!/guide/command_compiler-section-4'>Set Operations</a></li>\n<li><a href='#!/guide/command_compiler-section-5'>Compiler Directives</a></li>\n<li><a href='#!/guide/command_compiler-section-6'>Conditional Compilation</a></li>\n</ol>\n</div>\n\n<p>One of the major components in <a href=\"http://www.sencha.com/products/sencha-cmd/download\">Sencha Cmd</a>\nis its compiler, which provides a JavaScript-to-JavaScript, framework-aware optimizer.\nThe optimizer\n\"understands\" your high-level Ext JS and Sencha Touch code and produces the smallest, most\nefficient code possible to support these high-level abstractions.</p>\n\n<p>Before using the compiler, you should understand the basics of Sencha Cmd by reading the\nfollowing guides:</p>\n\n<ul>\n<li><a href=\"#!/guide/command\">Introduction to Sencha Cmd</a></li>\n<li><a href=\"#!/guide/command_app\">Using Sencha Cmd</a></li>\n<li><a href=\"#!/guide/command_code\">Compiler-Friendly Code Guidelines</a></li>\n</ul>\n\n\n<h2 id='command_compiler-section-1'>Sets And The Current Set</h2>\n\n<p>Under the covers, the compiler manages a set of source files and analyzes these files to\ndetermine their dependencies. The set of all files is determined by the <code>classpath</code>:</p>\n\n<pre><code>sencha compile -classpath=sdk/src,app ...\n</code></pre>\n\n<p>In this example, the compiler recursively loads <code>\"*.js\"</code> from the specified list of folders.\nThis set of all files defines the basis for all operations to follow (that is, it defines\nits \"universe\").</p>\n\n<p>The default classpath used by the compiler comes from these configuration properties:</p>\n\n<pre><code>${framework.classpath},${workspace.classpath},${app.classpath}\n</code></pre>\n\n<p>The compiler's output commands (for example, <code>concat</code> and <code>metadata</code>) operate on the set\nof files called the \"current set\". The current set starts out equal to the universe of all\nfiles, but this can be manipulated using the many commands provided to perform set\noperations.</p>\n\n<p><strong>Note</strong> With the compiler, you often see rather long command lines using the <code>and</code> command\nchaining mechanism. Also, in practical use cases, for long command lines, you should\nconsider using <a href=\"#!/guide/command_ant\">Ant</a> or a \"response file\". See\n<a href=\"#!/guide/command_advanced\">Advanced Sencha Cmd</a>.</p>\n\n<p>In this guide, all command lines are\ncomplete (and potentially long) to keep the examples as clear as possible.</p>\n\n<h2 id='command_compiler-section-2'>Generating Output with concat</h2>\n\n<p>A compiler ultimately is all about writing useful output given some number of inputs. The\n<code>concat</code> command concatenates the source for the current set of files in the\nappropriate dependency order.</p>\n\n<p>The one required parameter is <code>-out</code>, which indicates the name of the output file.\nOther options affect the generated file. You can pick one of the\nfollowing options for compression:</p>\n\n<ul>\n<li><code>-compress</code> - Compresses the generated file using the default compressor. Currently this\nis the same as <code>-yui</code>.</li>\n<li><code>-max</code> - Compresses the generated file using all compressors and keep the smallest.</li>\n<li><code>-closure</code> - Compresses the generated file using the <a href=\"https://developers.google.com/closure/compiler/\">Google Closure Compiler</a>.</li>\n<li><code>-uglify</code> - Compresses the generated file using <a href=\"https://github.com/mishoo/UglifyJS/\">UglifyJS</a>.</li>\n<li><code>-yui</code> - Compresses the source file using the <a href=\"http://developer.yahoo.com/yui/compressor/\">YUI Compressor</a>.</li>\n<li><code>-strip</code> - Strips comments from the output file, but preserves whitespace. This\noption converts \"ext-all-debug-w-comments.js\" into \"ext-all-debug.js\".</li>\n</ul>\n\n\n<p>The following command produces three flavors of output from a single\nread of the source.</p>\n\n<pre><code>sencha compile -classpath=sdk/src \\\n    exclude -namespace Ext.chart and \\\n    concat ext-all-nocharts-debug-w-comments.js and \\\n    -debug=true \\\n    concat -strip ext-all-nocharts-debug.js and \\\n    -debug=false \\\n    concat -yui ext-all-nocharts.js\n</code></pre>\n\n<h3>Generating Metadata</h3>\n\n<p>The compiler can also generate metadata in many useful ways, for example, the names of\nall source files, the set of files in dependency order, etc. To see what is available,\nsee the <a href=\"#!/guide/command_compiler_meta\">Generating Metadata</a> guide.</p>\n\n<h2 id='command_compiler-section-3'>Saving And Restoring Sets</h2>\n\n<p>When you need to produce multiple output files, it can be very helpful to save the\ncurrent set for later use:</p>\n\n<pre><code>sencha compile -classpath=sdk/src \\\n    exclude -namespace Ext.chart and \\\n    save nocharts and \\\n    ...\n    restore nocharts and \\\n    ...\n</code></pre>\n\n<p><code>The</code>save<code>command takes a snapshot of the current set and stores it under the given name\n(</code>nocharts` in this example).</p>\n\n<p>The simplest use of a saved set is with the <code>restore</code> command., which does the reverse and\nrestores the current set to its state at the time of the <code>save</code>.</p>\n\n<h2 id='command_compiler-section-4'>Set Operations</h2>\n\n<p>Many of the commands provided by the compiler are classified as set operations, which are\noperations that work on and produce sets. In the case of the compiler, this means sets of\nfiles or classes. Let's first take a look at set terminology.</p>\n\n<h3>A Little Set Theory</h3>\n\n<p>There are three classic set operations:</p>\n\n<ul>\n<li><p>Intersection - The intersection of two sets is a set containing only what was in both\nsets.\n<p><img src=\"guides/command_compiler/set-intersect.png\" alt=\"\"></p></p></li>\n<li><p>Union - The union of two sets is a set containing whatever was in either of the sets.\n<p><img src=\"guides/command_compiler/set-union.png\" alt=\"\"></p></p></li>\n<li><p>Difference - The difference of two sets is the set of all things in the first set that\nare not in the second set.\n<p><img src=\"guides/command_compiler/set-difference.png\" alt=\"\"></p></p></li>\n</ul>\n\n\n<h3>Set <code>include</code> and <code>exclude</code></h3>\n\n<p>These two set operations are probably the most common (and flexible) set operations. Both\nsupport these basic switches:</p>\n\n<ul>\n<li><code>-namespace</code> - Matches files that define types in the specified namespace.</li>\n<li><code>-class</code> - Matches a specific defined type.</li>\n<li><code>-file</code> - Matches filenames and/or folder names using Ant-style glob patterns (a \"*\"\nmatches only filename characters, where \"**\" matches folders).</li>\n<li><code>-tag</code> - Matches any files with the specified tag(s) (see below).</li>\n<li><code>-set</code> - The files that are present in any of the specified named sets.</li>\n</ul>\n\n\n<p>In all of these cases, the next command line argument is a list of match criteria\nseparated by commas. Also, a single <code>exclude</code> or <code>include</code> can have as many switch/value\npairs as needed.</p>\n\n<p>So, let's start with a simple example and build an <code>\"ext-all-no-charts-debug-w-comments.js\"</code>.</p>\n\n<pre><code>sencha compile -classpath=sdk/src \\\n    exclude -namespace Ext.chart and \\\n    ...\n</code></pre>\n\n<p>What is happening here is that we started with only the Ext JS sources (in <code>\"sdk/src\"</code>) and\nthey were all part of the \"current set\". We then performed a set difference by excluding\nall files in the <code>Ext.chart</code> namespace. The current set was then equivalent to <code>\"ext-all.js\"</code>\nbut without use of the Chart package.</p>\n\n<h3>Negating <code>include</code> and <code>exclude</code> with <code>-not</code></h3>\n\n<p>Both <code>include</code> and <code>exclude</code> support a rich set of matching criteria. This is rounded out\nby the <code>-not</code> switch, which negates the matching criteria that follows it. This means that\nthe files included or excluded are all those that do not match the criteria.</p>\n\n<p>For example:</p>\n\n<pre><code>sencha compile -classpath=sdk/src,js \\\n    ... \\\n    exclude -not -namespace Ext and \\\n    ...\n</code></pre>\n\n<p>The <code>exclude</code> command excludes from the current set any classes that are not in\nthe <code>Ext</code> namespace.</p>\n\n<h3>The <code>all</code> Set</h3>\n\n<p>In some cases, it is very handy to restore the current set to all files or to the empty\nset. To do this, simply use <code>include</code> or <code>exclude</code> with the <code>-all</code> switch. To build\non the previous example:</p>\n\n<pre><code>sencha compile -classpath=sdk/src \\\n    ... \\\n    include -all and \\\n    ... \\\n    exclude -all and \\\n    ...\n</code></pre>\n\n<p>After the <code>include -all</code>, the current set is all files. After <code>exclude -all</code> it is the\nempty set.</p>\n\n<h3>Union</h3>\n\n<p>As shown already, the <code>include</code> command is a form of set union: it performs a union of\nthe current set with the set of matching files. Sometimes it is desirable to not include\nthe current set in the union and only include those file matching the desired criteria. This is\nwhat the <code>union</code> command does.</p>\n\n<p>The <code>union</code> command has all of the options of <code>include</code>. Consider this <code>union</code> command:</p>\n\n<pre><code>sencha compile -classpath=sdk/src ... and \\\n    union -namespace Ext.grid,Ext.chart and \\\n    ...\n</code></pre>\n\n<p>It is exactly equivalent to this pair of <code>exclude</code> and <code>include</code> commands:</p>\n\n<pre><code>sencha compile -classpath=sdk/src ... and \\\n    exclude -all and \\\n    include -namespace Ext.grid,Ext.chart and \\\n    ...\n</code></pre>\n\n<h3>Transitivity/Recursive Union</h3>\n\n<p>One of the most important set operations is the union of all files explicitly specified\nand all of the files they require. This is the core of a build process, since this is\nhow you select only the set of files you need. So, if you have a small set of top-level\nfiles to start the process, say the class <code>MyApp.App</code>, you can use:</p>\n\n<pre><code>sencha compile -classpath=sdk/src,app \\\n    union -r -class MyApp.App and \\\n    ...\n</code></pre>\n\n<p>The <code>union</code> command starts with no current set, includes only the class <code>MyApp.App</code> and\nthen proceeds to include all the things it needs recursively. The resulting current set\nis all files needed by the application.</p>\n\n<h3>Intersect (Strict)</h3>\n\n<p>The <code>intersect</code> command is a bit less flexible in the criteria it supports: it only\naccepts named sets (using <code>-set</code>).</p>\n\n<pre><code>sencha compile -classpath=sdk/src,common,page1/src,page2/src \\\n    ... \\\n    intersect -set page1,page2 and \\\n    ... \\\n</code></pre>\n\n<p>This command intersects the two page sets and produces their intersection as the\ncurrent set.</p>\n\n<h3>Intersect (Fuzzy)</h3>\n\n<p>When dealing with more than two sets, <code>intersect</code> has an option called <code>-min</code> that sets\nthe threshold for membership in the current set. This option is discussed in more detail\nin <a href=\"#!/guide/command_app_multi\">Multi-Page Ext JS Apps</a>.</p>\n\n<p>For example,</p>\n\n<pre><code>sencha compile ... \\\n    intersect -min=2 -set page1,page2,page3 and \\\n    ...\n</code></pre>\n\n<p>This use of <code>intersect</code> produces in the current set all files that are found in two of\nthe three sets specified.</p>\n\n<h2 id='command_compiler-section-5'>Compiler Directives</h2>\n\n<p>In many situations, it is helpful to embed metadata in files that only the compiler will\npick up. To do this, the compiler recognizes special line comments as directives.</p>\n\n<p>The list of directives is:</p>\n\n<ul>\n<li><code>//@charset</code></li>\n<li><code>//@tag</code></li>\n<li><code>//@define</code></li>\n<li><code>//@require</code></li>\n</ul>\n\n\n<h3>Character Encoding</h3>\n\n<p>There is no standard way to specify the character encoding of a particular JS file. The\nSencha Cmd compiler, therefore, understands the following directive:</p>\n\n<pre><code>//@charset ISO-9959-1\n</code></pre>\n\n<p>This must be the first line of the JS file. The value to the right of <code>charset</code> can be any\nvalid <a href=\"http://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html\">Java charset</a>\nname. The default is \"UTF-8\".</p>\n\n<p>The <code>charset</code> directive is used to describe the encoding of an input file to the compiler.\nThis does not affect the encoding of the output file. The content of the input file is\nconverted to Unicode internally.</p>\n\n<h3>Tagging</h3>\n\n<p>In an ideal world, a namespace would be sufficient to define a set of interest. Sometimes,\nhowever, a set can be quite arbitrary and even cross namespace boundaries. Rather than\nmove this issue to the command-line level, the compiler can track arbitrary tags in files.</p>\n\n<p>Consider the example:</p>\n\n<pre><code>//@tag foo,bar\n</code></pre>\n\n<p>This assigns the tags <code>foo</code> and <code>bar</code> to the file. These tags can be used in the <code>include</code>,\n<code>exclude</code> and <code>union</code> commands with their <code>-tag</code> option.</p>\n\n<h3>Dealing with \"Other\" JavaScript Files</h3>\n\n<p>In some cases, JavaScript files define classes or objects and require classes or objects\nthat are not expressed in terms of <code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></code> and <code>requires</code> or <code><a href=\"#!/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a></code>. Using\n<code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></code> you can still say that a class <code>requires</code> such things and the dynamic loader\nwill not complain so long as those things exist (if they do not exist, the loader will\ntry to load them, which will most likely fail).</p>\n\n<p>To support arbitrary JavaScript approaches to defining and requiring types, the compiler\nalso provides these directives:</p>\n\n<pre><code>//@define Foo.bar.Thing\n//@requires Bar.foo.Stuff\n</code></pre>\n\n<p>These directives set up the same basic metadata in the compiler that tracks what file\ndefines a type and what types that a file requires. In most ways, then, these directives\naccomplish the same thing as an <code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></code> with a <code>requires</code> property.</p>\n\n<p>You can use either of these directives in a file without using the other.</p>\n\n<h2 id='command_compiler-section-6'>Conditional Compilation</h2>\n\n<p>The compiler supports conditional compilation directives, such as:</p>\n\n<pre><code>foo: function () {\n    //&lt;debug&gt;\n    if (sometest) {\n        Ext.log.warn(\"Something is wrong...\");\n    }\n    //&lt;/debug&gt;\n\n    this.bar();\n}\n</code></pre>\n\n<p>This may be the most useful of the conditional directives, which you can use for code that\nyou want to run in a development environment but not in production.</p>\n\n<p><strong>Important</strong> When you use conditional compilation, remember that unless you always run\ncompiled code, the directives are just comments and the conditional code will be \"live\"\nduring development.</p>\n\n<h3>The debug directive</h3>\n\n<p>When compiling, by default, none of the preprocessor statements are examined. So in this\ncase, the result is development mode. If we switch on <code>-debug</code> we get a very similar\nresult, but with the preprocessor active. In fact, the only difference is that the\npreprocessor directives are removed.</p>\n\n<p>For example, this command:</p>\n\n<pre><code>sencha compile -classpath=... \\\n    -debug \\\n    ...\n</code></pre>\n\n<p>Generates code like this:</p>\n\n<pre><code>foo: function () {\n    if (sometest) {\n        Ext.log.warn(\"Something is wrong...\");\n    }\n\n    this.bar();\n}\n</code></pre>\n\n<p>However, this command:</p>\n\n<pre><code>sencha compile -classpath=... \\\n    -debug=false \\\n    ...\n</code></pre>\n\n<p>Generates code like this:</p>\n\n<pre><code>foo: function () {\n    this.bar();\n}\n</code></pre>\n\n<p>You can see that the <code>if</code> test and the log statement are both removed.</p>\n\n<h3>The if directive</h3>\n\n<p>The most general directive is <code>if</code>. The <code>if</code> directive tests one or more configured\noptions against the attributes of the directive and removes the code in the block\nif any are false.</p>\n\n<p>For example:</p>\n\n<pre><code>//&lt;if debug&gt;\n//&lt;/if&gt;\n</code></pre>\n\n<p>This is equivalent to the <code>&lt;debug&gt;</code> directive.</p>\n"});