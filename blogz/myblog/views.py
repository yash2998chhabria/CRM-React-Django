from django.shortcuts import render,reverse,get_object_or_404,HttpResponseRedirect
from django.views.generic import ListView, DetailView, CreateView,UpdateView,DeleteView
from .models import tag,comment
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from .forms import tagform,commentform
# Create your views here.
# def blogs(request):
    # context={}
    # return render(request,'blogs.html',context)

class blogview(ListView):
    model = tag
    template_name = 'blogs.html'
    ordering = ['-date_created']

class detailvieww(DetailView):
    model = tag
    template_name = 'detailview.html'
    def get_context_data(self ,*args,**kwargs):
        likesss = get_object_or_404(tag,id= self.kwargs['pk'])
        liked = False
        if tag.likes.filter(id=self.request.user_id.id).exists():
            liked=True

        total_likes = likesss.total_likes()
        context = {'totall':total_likes,'liked':liked} 
        return context

   
class create_blog(CreateView):
    model = tag
    form_class= tagform
    template_name = 'addpost.html'
   

    
class update_blog(UpdateView):
    model = tag
    # form_class= 'addpost.html'
    template_name = 'update.html'
    fields = ['Title', 'body','snippet']
    
 
class delete_blog(DeleteView):
    model = tag
    # form_class= 'addpost.html'
    template_name = 'delete.html'
    fields = '__all__'
    success_url = reverse_lazy('home')

class delete_c(DeleteView):
    model = comment
    # form_class= 'addpost.html'
    template_name = 'delete.html'
    success_url = reverse_lazy('home')

# def createcomment(request,pk):
    # post = get_object_or_404(tag, id=request.POST.get('p_id'))
    # post.comment.add(request.user)
    # return HttpResponseRedirect(reverse('detail',args=[str(pk)]))
   
def likeview(request,pk):
    post = get_object_or_404(tag, id=request.POST.get('post_id'))
    liked = False
    if tag.likes.filter(request.user_id.id).exists():
       post.likes.remove()
       liked = False
    else:
        post.likes.add(id=request.user)
        liked = True
    return HttpResponseRedirect(reverse('detail',args=[str(pk)]))


    